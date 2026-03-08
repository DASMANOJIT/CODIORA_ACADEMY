"use client";

import { useEffect, useRef, useState } from "react";

type InstagramItem = {
  id: string;
  url: string;
  thumbnail: string;
  caption: string;
};

type InstagramResponse = {
  items: InstagramItem[];
  profileUrl: string;
};

const truncate = (text: string, length: number) => {
  if (!text) return "";
  return text.length > length ? `${text.slice(0, length).trim()}...` : text;
};

export default function InstagramFeed() {
  const [items, setItems] = useState<InstagramItem[]>([]);
  const [profileUrl, setProfileUrl] = useState("https://www.instagram.com/codiora_academy/");
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
        const response = await fetch("/api/social/instagram", {
          signal: controller.signal,
        });

        if (!response.ok) throw new Error("Failed to load Instagram feed");

        const data: InstagramResponse = await response.json();
        setItems(data.items || []);
        setProfileUrl(data.profileUrl || profileUrl);
      } catch {
        setItems([]);
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, [readyToLoad, profileUrl]);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#0A0A0A",
        padding: "80px 5%",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 65% 45% at 50% 0%, rgba(245,166,35,0.09) 0%, rgba(245,166,35,0) 70%)",
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
          Latest From Instagram
        </h2>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "15px",
            color: "rgba(255,255,255,0.55)",
            marginBottom: "28px",
          }}
        >
          Recent reels, free educational content for students, and exam preparation resources from Codiora Academy.
        </p>

        <div className="instagram-grid">
          {loading &&
            Array.from({ length: 4 }).map((_, i) => (
              <div key={`instagram-skeleton-${i}`} className="social-card social-skeleton" />
            ))}

          {!loading &&
            items.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
                aria-label={`Open Instagram video from Codiora Academy: ${truncate(item.caption, 60) || "latest update"}`}
              >
                <img
                  src={item.thumbnail}
                  alt={`Codiora Academy Instagram reel thumbnail for online learning platform for students - ${truncate(item.caption, 70) || "latest student mentorship update"}`}
                  loading="lazy"
                  decoding="async"
                  width={1080}
                  height={1350}
                  className="social-image"
                  onError={(e) => {
                    e.currentTarget.src = "/logo.png";
                  }}
                />
                <div className="social-overlay" />
                <div className="social-play">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="11" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
                    <path d="M10 8.8L16.2 12L10 15.2V8.8Z" fill="rgba(255,255,255,0.95)" />
                  </svg>
                </div>
                <div className="social-caption">{truncate(item.caption, 88) || "Watch on Instagram"}</div>
              </a>
            ))}
        </div>

        {!loading && items.length === 0 && (
          <div className="social-empty">
            <p>Instagram feed is temporarily unavailable.</p>
            <a href={profileUrl} target="_blank" rel="noopener noreferrer">
              Visit Instagram Profile
            </a>
          </div>
        )}
      </div>

      <style>{`
        .instagram-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }
        .social-card {
          position: relative;
          display: block;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.03);
          aspect-ratio: 9 / 16;
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.28);
        }
        .social-card:hover {
          transform: translateY(-6px);
          border-color: rgba(245,166,35,0.45);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
        }
        .social-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          background: #0c0c0c;
        }
        .social-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.72) 16%, rgba(0,0,0,0.08) 65%);
        }
        .social-play {
          position: absolute;
          left: 50%;
          top: 45%;
          transform: translate(-50%, -50%);
          width: 54px;
          height: 54px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(12, 12, 12, 0.45);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.25);
        }
        .social-caption {
          position: absolute;
          left: 14px;
          right: 14px;
          bottom: 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          line-height: 1.5;
          color: rgba(255,255,255,0.88);
          text-shadow: 0 2px 8px rgba(0,0,0,0.35);
        }
        .social-skeleton {
          background: linear-gradient(120deg, rgba(255,255,255,0.03), rgba(255,255,255,0.09), rgba(255,255,255,0.03));
          background-size: 200% 100%;
          animation: shimmer 1.3s linear infinite;
        }
        .social-empty {
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
        .social-empty a {
          color: #F5A623;
          text-decoration: none;
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @media (max-width: 1100px) {
          .instagram-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        @media (max-width: 860px) {
          .instagram-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 560px) {
          .instagram-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
