"use client";
import { useEffect, useRef, useState } from "react";

const boards = ["All", "CBSE", "ICSE"];

const courses = [
  { board: "CBSE", grade: "Class 12", subject: "Physics", icon: "⚛️", topics: 28, tests: 45, popular: true },
  { board: "CBSE", grade: "Class 12", subject: "Mathematics", icon: "📐", topics: 32, tests: 60, popular: true },
  { board: "CBSE", grade: "Class 10", subject: "Science", icon: "🔬", topics: 24, tests: 38, popular: false },
  { board: "ICSE", grade: "Class 12", subject: "Chemistry", icon: "🧪", topics: 26, tests: 42, popular: false },
  { board: "ICSE", grade: "Class 10", subject: "Mathematics", icon: "📊", topics: 20, tests: 35, popular: true },
  { board: "CBSE", grade: "Class 11", subject: "Biology", icon: "🌿", topics: 22, tests: 36, popular: false },
];

export default function Courses() {
  const [activeBoard, setActiveBoard] = useState("All");
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered = activeBoard === "All" ? courses : courses.filter(c => c.board === activeBoard);

  return (
    <section
      id="courses"
      ref={ref}
      style={{
        background: "linear-gradient(180deg, #0A0A0A 0%, #0E0E0A 100%)",
        padding: "100px 5%",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "24px",
          marginBottom: "48px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.6s ease",
        }}>
          <div>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "12px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#F5A623",
              marginBottom: "12px",
              fontWeight: 600,
            }}>
              What We Offer
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.15,
            }}>
              Courses & Subjects
            </h2>
          </div>

          {/* Board Filter */}
          <div style={{
            display: "flex",
            gap: "8px",
            background: "rgba(255,255,255,0.04)",
            padding: "4px",
            borderRadius: "10px",
            border: "1px solid rgba(255,255,255,0.07)",
          }}>
            {boards.map((b) => (
              <button
                key={b}
                onClick={() => setActiveBoard(b)}
                style={{
                  padding: "8px 20px",
                  borderRadius: "7px",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  transition: "all 0.2s",
                  background: activeBoard === b
                    ? "linear-gradient(135deg, #F5A623, #E8920A)"
                    : "transparent",
                  color: activeBoard === b ? "#0A0A0A" : "rgba(255,255,255,0.55)",
                }}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px",
        }}>
          {filtered.map((course, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "14px",
                padding: "28px",
                position: "relative",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(28px)",
                transition: `all 0.5s ease ${i * 0.08}s`,
                cursor: "pointer",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "1px solid rgba(245,166,35,0.3)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "1px solid rgba(255,255,255,0.07)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Popular badge */}
              {course.popular && (
                <div style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  background: "linear-gradient(135deg, #F5A623, #E8920A)",
                  color: "#0A0A0A",
                  fontSize: "10px",
                  fontWeight: 700,
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "3px 10px",
                  borderRadius: "100px",
                }}>
                  Popular
                </div>
              )}

              {/* Board tag */}
              <div style={{
                display: "inline-block",
                fontSize: "11px",
                fontFamily: "'DM Sans', sans-serif",
                color: "rgba(245,166,35,0.7)",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "16px",
                background: "rgba(245,166,35,0.08)",
                padding: "3px 10px",
                borderRadius: "100px",
              }}>
                {course.board} • {course.grade}
              </div>

              {/* Icon + Subject */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <span style={{ fontSize: "36px" }}>{course.icon}</span>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                }}>
                  {course.subject}
                </h3>
              </div>

              {/* Stats */}
              <div style={{
                display: "flex",
                gap: "0",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                paddingTop: "16px",
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#F5A623",
                  }}>{course.topics}</div>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.4)",
                    marginTop: "2px",
                  }}>Topics</div>
                </div>
                <div style={{
                  width: "1px",
                  background: "rgba(255,255,255,0.06)",
                  margin: "0 20px",
                }} />
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#F5A623",
                  }}>{course.tests}</div>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.4)",
                    marginTop: "2px",
                  }}>Tests</div>
                </div>
                <div style={{ flex: 2, display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                  <button style={{
                    background: "rgba(245,166,35,0.1)",
                    border: "1px solid rgba(245,166,35,0.2)",
                    borderRadius: "8px",
                    color: "#F5A623",
                    padding: "8px 16px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "#F5A623";
                    e.target.style.color = "#0A0A0A";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(245,166,35,0.1)";
                    e.target.style.color = "#F5A623";
                  }}
                  >
                    Start →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <a href="#enroll" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "rgba(255,255,255,0.6)",
            textDecoration: "none",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            borderBottom: "1px solid rgba(255,255,255,0.15)",
            paddingBottom: "2px",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = "#F5A623"}
          onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}
          >
            View all subjects & grades →
          </a>
        </div>
      </div>
    </section>
  );
}