"use client";

import { useEffect, useRef, useState } from "react";

type YouTubeItem = {
  id: string;
  url: string;
  title: string;
  thumbnail: string;
};

type YouTubeResponse = {
  items: YouTubeItem[];
  channelUrl: string;
};

const truncate = (text: string, length: number) => {
  if (!text) return "";
  return text.length > length ? `${text.slice(0, length).trim()}...` : text;
};

export default function YoutubeFeed() {
  const [items, setItems] = useState<YouTubeItem[]>([]);
  const [channelUrl, setChannelUrl] = useState("https://youtube.com/@codioraacademy");
  const [loading, setLoading] = useState(true);
  const [readyToLoad, setReadyToLoad] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReadyToLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!readyToLoad) return;

    const controller = new AbortController();

    (async () => {
      try {
        const response = await fetch("/api/social/youtube", {
          signal: controller.signal,
        });

        if (!response.ok) throw new Error("Failed to load YouTube feed");

        const data: YouTubeResponse = await response.json();
        setItems(data.items || []);
        setChannelUrl(data.channelUrl || channelUrl);
      } catch {
        setItems([]);
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, [readyToLoad, channelUrl]);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#0A0A0A",
        padding: "40px 5% 90px",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 60% 55% at 52% 30%, rgba(230,57,70,0.12) 0%, rgba(230,57,70,0) 70%)",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 3.5vw, 44px)",
            color: "#FFFFFF",
            marginBottom: "12px",
          }}
        >
          Latest YouTube Videos
        </h2>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "15px",
            color: "rgba(255,255,255,0.55)",
            marginBottom: "28px",
          }}
        >
          Fresh lessons, digital education resources, and online mock tests for students from our channel.
        </p>

        <div className="yt-grid">
          {loading &&
            Array.from({ length: 3 }).map((_, i) => <div key={`yt-skeleton-${i}`} className="yt-card yt-skeleton" />)}

          {!loading &&
            items.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="yt-card"
                aria-label={item.title}
              >
                <div className="yt-thumb-wrap">
                  <img
                    src={item.thumbnail}
                    alt={`${item.title} - Codiora Academy student mentorship platform video`}
                    loading="lazy"
                    decoding="async"
                    width={1280}
                    height={720}
                    className="yt-image"
                  />
                  <div className="yt-thumb-overlay" />
                  <div className="yt-play">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="11" stroke="rgba(255,255,255,0.85)" strokeWidth="1.4" />
                      <path d="M10 8.5L16.5 12L10 15.5V8.5Z" fill="rgba(255,255,255,0.95)" />
                    </svg>
                  </div>
                </div>
                <div className="yt-content">
                  <h3>{truncate(item.title, 88)}</h3>
                </div>
              </a>
            ))}
        </div>

        {!loading && items.length === 0 && (
          <div className="yt-empty">
            <p>YouTube feed is temporarily unavailable.</p>
            <a href={channelUrl} target="_blank" rel="noopener noreferrer">
              Open YouTube Channel
            </a>
          </div>
        )}
      </div>

      <style>{`
        .yt-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }
        .yt-card {
          display: block;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.12);
          background: linear-gradient(140deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.28);
        }
        .yt-card:hover {
          transform: translateY(-6px);
          border-color: rgba(230,57,70,0.4);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
        }
        .yt-thumb-wrap {
          position: relative;
          aspect-ratio: 16 / 9;
          overflow: hidden;
        }
        .yt-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .yt-thumb-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 70%);
        }
        .yt-play {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(20,20,20,0.48);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255,255,255,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .yt-content {
          padding: 14px 14px 16px;
        }
        .yt-content h3 {
          margin: 0;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          line-height: 1.55;
          color: rgba(255,255,255,0.86);
          font-weight: 500;
        }
        .yt-skeleton {
          min-height: 220px;
          background: linear-gradient(120deg, rgba(255,255,255,0.03), rgba(255,255,255,0.08), rgba(255,255,255,0.03));
          background-size: 200% 100%;
          animation: ytShimmer 1.3s linear infinite;
        }
        .yt-empty {
          margin-top: 16px;
          padding: 18px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.03);
          font-family: 'DM Sans', sans-serif;
          color: rgba(255,255,255,0.65);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .yt-empty a {
          color: #E63946;
          text-decoration: none;
        }
        @keyframes ytShimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @media (max-width: 1050px) {
          .yt-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 620px) {
          .yt-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
