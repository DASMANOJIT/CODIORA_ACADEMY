"use client";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Ananya Chatterjee",
    grade: "Class 12, CBSE",
    score: "94% in Boards",
    avatar: "AC",
    text: "Codiora's Physics notes are unlike anything I've seen. The chapter-wise breakdown made revision so much easier. My marks jumped from 72% to 94% this year!",
  },
  {
    name: "Rohit Das",
    grade: "Class 10, ICSE",
    score: "Top 5 in School",
    avatar: "RD",
    text: "The offline mock tests are exactly like the real exam. I felt confident walking into my board exam because I had practiced under those conditions. Highly recommend!",
  },
  {
    name: "Priya Sharma",
    grade: "Class 11, CBSE",
    score: "96 in Maths",
    avatar: "PS",
    text: "The hybrid model is perfect. I study online in the evening after school and attend the offline tests on weekends. Best of both worlds, truly.",
  },
  {
    name: "Arjun Bose",
    grade: "Class 12, ICSE",
    score: "Chemistry 91%",
    avatar: "AB",
    text: "The free study material got me started and then I enrolled in the test series. The analytics after each test helped me identify my weak chapters instantly.",
  },
  {
    name: "Sneha Mukherjee",
    grade: "Class 9, CBSE",
    score: "School Topper",
    avatar: "SM",
    text: "I was struggling with Science until Codiora. The notes are so well-organized and the teachers at the offline center explain everything patiently.",
  },
];

export default function Testimonials() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setActive(a => (a + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="testimonials"
      ref={ref}
      style={{
        background: "linear-gradient(180deg, #0A0A0A 0%, #0C0C08 100%)",
        padding: "100px 5%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Gold glow */}
      <div style={{
        position: "absolute",
        bottom: "-100px",
        right: "-100px",
        width: "600px",
        height: "600px",
        background: "radial-gradient(circle, rgba(245,166,35,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div style={{
          textAlign: "center",
          marginBottom: "64px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.6s ease",
        }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "12px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#F5A623",
            marginBottom: "12px",
            fontWeight: 600,
          }}>
            Student Success Stories
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 800,
            color: "#FFFFFF",
            lineHeight: 1.15,
          }}>
            Results That Speak
          </h2>
        </div>

        {/* Featured testimonial */}
        <div style={{
          background: "rgba(245,166,35,0.04)",
          border: "1px solid rgba(245,166,35,0.12)",
          borderRadius: "20px",
          padding: "clamp(32px, 5vw, 64px)",
          marginBottom: "32px",
          opacity: visible ? 1 : 0,
          transition: "all 0.6s ease 0.2s",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Quote mark */}
          <div style={{
            position: "absolute",
            top: "24px",
            right: "32px",
            fontFamily: "Georgia, serif",
            fontSize: "120px",
            lineHeight: 1,
            color: "rgba(245,166,35,0.08)",
            userSelect: "none",
          }}>
            "
          </div>

          {/* Stars */}
          <div style={{ display: "flex", gap: "4px", marginBottom: "24px" }}>
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#F5A623">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            ))}
          </div>

          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(18px, 2.5vw, 26px)",
            color: "rgba(255,255,255,0.85)",
            lineHeight: 1.6,
            marginBottom: "36px",
            fontStyle: "italic",
            maxWidth: "780px",
            transition: "all 0.4s ease",
          }}>
            "{testimonials[active].text}"
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #F5A623, #E8920A)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              color: "#0A0A0A",
              flexShrink: 0,
            }}>
              {testimonials[active].avatar}
            </div>
            <div>
              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "15px",
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: "2px",
              }}>
                {testimonials[active].name}
              </div>
              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                color: "rgba(255,255,255,0.45)",
              }}>
                {testimonials[active].grade}
              </div>
            </div>
            <div style={{ marginLeft: "auto" }}>
              <div style={{
                background: "rgba(245,166,35,0.1)",
                border: "1px solid rgba(245,166,35,0.2)",
                borderRadius: "100px",
                padding: "6px 16px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                color: "#F5A623",
              }}>
                🏆 {testimonials[active].score}
              </div>
            </div>
          </div>
        </div>

        {/* Dot navigation */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "48px" }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: active === i ? "32px" : "8px",
                height: "8px",
                borderRadius: "100px",
                border: "none",
                cursor: "pointer",
                background: active === i ? "#F5A623" : "rgba(255,255,255,0.2)",
                transition: "all 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Mini testimonial grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "16px",
        }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              style={{
                background: active === i ? "rgba(245,166,35,0.06)" : "rgba(255,255,255,0.02)",
                border: active === i ? "1px solid rgba(245,166,35,0.2)" : "1px solid rgba(255,255,255,0.05)",
                borderRadius: "12px",
                padding: "16px",
                cursor: "pointer",
                transition: "all 0.2s",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transitionDelay: `${0.3 + i * 0.07}s`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <div style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #F5A623, #E8920A)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#0A0A0A",
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 600, color: "#fff" }}>{t.name}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", color: "rgba(255,255,255,0.4)" }}>{t.grade}</div>
                </div>
              </div>
              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                color: "#F5A623",
              }}>{t.score}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}