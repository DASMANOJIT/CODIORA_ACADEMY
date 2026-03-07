"use client";
import { useEffect, useRef, useState } from "react";

const courses = [
  { board: "CBSE", subject: "Mathematics", icon: "📐", topics: 32, tests: 60, popular: true },
  { board: "CBSE", subject: "Physics", icon: "⚛️", topics: 28, tests: 45, popular: true },
  { board: "CBSE", subject: "Chemistry", icon: "🧪", topics: 26, tests: 42, popular: false },
  { board: "CBSE", subject: "Biology", icon: "🌿", topics: 22, tests: 36, popular: false },
  { board: "CBSE", subject: "English", icon: "📚", topics: 30, tests: 50, popular: true },
  { board: "CBSE", subject: "History", icon: "🏛️", topics: 24, tests: 40, popular: false },
  { board: "CBSE", subject: "Geography", icon: "🌍", topics: 22, tests: 38, popular: false },
  { board: "CBSE", subject: "Hindi", icon: "📝", topics: 25, tests: 40, popular: false },
  { board: "CBSE", subject: "Bengali", icon: "📖", topics: 18, tests: 25, popular: false },
  { board: "CBSE", subject: "Computer", icon: "💻", topics: 20, tests: 30, popular: true },

  { board: "ICSE", subject: "Mathematics", icon: "📊", topics: 30, tests: 55, popular: true },
  { board: "ICSE", subject: "Physics", icon: "⚛️", topics: 28, tests: 45, popular: true },
  { board: "ICSE", subject: "Chemistry", icon: "🧪", topics: 26, tests: 42, popular: false },
  { board: "ICSE", subject: "Biology", icon: "🌿", topics: 22, tests: 36, popular: false },
  { board: "ICSE", subject: "English", icon: "📚", topics: 35, tests: 55, popular: true },
  { board: "ICSE", subject: "History", icon: "🏛️", topics: 24, tests: 40, popular: false },
  { board: "ICSE", subject: "Geography", icon: "🌍", topics: 22, tests: 38, popular: false },
  { board: "ICSE", subject: "Hindi", icon: "📝", topics: 22, tests: 35, popular: false },
  { board: "ICSE", subject: "Bengali", icon: "📖", topics: 18, tests: 25, popular: false },
  { board: "ICSE", subject: "Computer", icon: "💻", topics: 25, tests: 35, popular: true },
];

export default function Courses() {
  const [selectedBoard, setSelectedBoard] = useState(null); // null = not chosen yet
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

  const filtered = selectedBoard ? courses.filter(c => c.board === selectedBoard) : [];

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

        {/* Section Header */}
        <div style={{
          textAlign: "center",
          marginBottom: "56px",
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
            What We Offer
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 800,
            color: "#FFFFFF",
            lineHeight: 1.15,
            marginBottom: "16px",
          }}>
            Courses & Subjects
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "16px",
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.7,
          }}>
            Select your board to explore subjects tailored for you.
          </p>
        </div>

        {/* Board Selection — always visible */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "56px",
          flexWrap: "wrap",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.6s ease 0.15s",
        }}>
          {["CBSE", "ICSE"].map((board) => {
            const isActive = selectedBoard === board;
            return (
              <button
                key={board}
                onClick={() => setSelectedBoard(board)}
                style={{
                  position: "relative",
                  padding: "0",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  width: "220px",
                }}
              >
                <div style={{
                  padding: "32px 28px",
                  borderRadius: "16px",
                  border: isActive
                    ? "1.5px solid rgba(245,166,35,0.6)"
                    : "1px solid rgba(255,255,255,0.09)",
                  background: isActive
                    ? "linear-gradient(135deg, rgba(245,166,35,0.1) 0%, rgba(245,166,35,0.04) 100%)"
                    : "rgba(255,255,255,0.03)",
                  transition: "all 0.25s ease",
                  boxShadow: isActive ? "0 0 40px rgba(245,166,35,0.12)" : "none",
                  textAlign: "center",
                }}>
                  {/* Board logo icon */}
                  <div style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "14px",
                    background: isActive ? "rgba(245,166,35,0.15)" : "rgba(255,255,255,0.05)",
                    border: isActive ? "1px solid rgba(245,166,35,0.3)" : "1px solid rgba(255,255,255,0.07)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    transition: "all 0.25s ease",
                    fontSize: "24px",
                  }}>
                    {board === "CBSE" ? "🇮🇳" : "📋"}
                  </div>

                  <div style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "26px",
                    fontWeight: 800,
                    color: isActive ? "#F5A623" : "#FFFFFF",
                    marginBottom: "6px",
                    transition: "color 0.25s",
                  }}>
                    {board}
                  </div>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                    color: isActive ? "rgba(245,166,35,0.7)" : "rgba(255,255,255,0.35)",
                    lineHeight: 1.5,
                    transition: "color 0.25s",
                  }}>
                    {board === "CBSE"
                      ? "Central Board of Secondary Education"
                      : "Indian Certificate of Secondary Education"}
                  </div>

                  {/* Active indicator */}
                  {isActive && (
                    <div style={{
                      position: "absolute",
                      top: "14px",
                      right: "14px",
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #F5A623, #E8920A)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Prompt if no board selected */}
        {!selectedBoard && (
          <div style={{
            textAlign: "center",
            padding: "48px 0",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.5s ease 0.3s",
          }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "14px 28px",
              borderRadius: "100px",
              border: "1px dashed rgba(245,166,35,0.25)",
              background: "rgba(245,166,35,0.03)",
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                color: "rgba(255,255,255,0.4)",
              }}>
                Choose your board above to see available subjects
              </span>
            </div>
          </div>
        )}

        {/* Cards Grid — only shown after board is picked */}
        {selectedBoard && (
          <>
            {/* Board label above cards */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "28px",
              flexWrap: "wrap",
              gap: "12px",
            }}>
              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                color: "rgba(255,255,255,0.45)",
              }}>
                Showing <span style={{ color: "#F5A623", fontWeight: 700 }}>{filtered.length} subjects</span> for{" "}
                <span style={{ color: "#FFFFFF", fontWeight: 600 }}>{selectedBoard}</span> · Class 6–10
              </div>
              <button
                onClick={() => setSelectedBoard(null)}
                style={{
                  background: "none",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "100px",
                  color: "rgba(255,255,255,0.4)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "12px",
                  padding: "5px 14px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => {
                  e.target.style.borderColor = "rgba(245,166,35,0.3)";
                  e.target.style.color = "#F5A623";
                }}
                onMouseLeave={e => {
                  e.target.style.borderColor = "rgba(255,255,255,0.1)";
                  e.target.style.color = "rgba(255,255,255,0.4)";
                }}
              >
                ← Change board
              </button>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "20px",
            }}>
              {filtered.map((course, i) => (
                <div
                  key={`${course.board}-${course.subject}`}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "14px",
                    padding: "28px",
                    position: "relative",
                    opacity: 0,
                    transform: "translateY(20px)",
                    animation: `fadeUp 0.4s ease ${i * 0.05}s forwards`,
                    cursor: "pointer",
                    overflow: "hidden",
                    transition: "border 0.2s, box-shadow 0.2s, transform 0.2s",
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
                  {course.popular && (
                    <div style={{
                      position: "absolute",
                      top: "14px",
                      right: "14px",
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
                    {course.board} · Class 6–10
                  </div>

                  {/* Icon + Subject */}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                    <span style={{ fontSize: "34px" }}>{course.icon}</span>
                    <h3 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "21px",
                      fontWeight: 700,
                      color: "#FFFFFF",
                    }}>
                      {course.subject}
                    </h3>
                  </div>

                  {/* Stats */}
                  <div style={{
                    display: "flex",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    paddingTop: "16px",
                    alignItems: "center",
                  }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "20px", fontWeight: 700, color: "#F5A623" }}>{course.topics}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.4)", marginTop: "2px" }}>Topics</div>
                    </div>
                    <div style={{ width: "1px", background: "rgba(255,255,255,0.06)", margin: "0 16px", height: "32px" }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "20px", fontWeight: 700, color: "#F5A623" }}>{course.tests}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.4)", marginTop: "2px" }}>Tests</div>
                    </div>
                    <div style={{ flex: 2, display: "flex", justifyContent: "flex-end" }}>
                      <button
                        style={{
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
                        onMouseEnter={(e) => { e.target.style.background = "#F5A623"; e.target.style.color = "#0A0A0A"; }}
                        onMouseLeave={(e) => { e.target.style.background = "rgba(245,166,35,0.1)"; e.target.style.color = "#F5A623"; }}
                      >
                        Start →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* View All CTA */}
        <div style={{ textAlign: "center", marginTop: "52px" }}>
          <a
            href="#enroll"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "rgba(255,255,255,0.5)",
              textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              borderBottom: "1px solid rgba(255,255,255,0.12)",
              paddingBottom: "2px",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#F5A623"}
            onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}
          >
            Want a personalised study plan? Enroll now →
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}