"use client";
import { useEffect, useRef, useState } from "react";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "8617759263";

export default function EnrollCTA() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", classGrade: "", board: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.name,
          whatsappNumber: form.phone,
          studentClass: form.classGrade,
          board: form.board,
        }),
      });

      if (!response.ok) {
        throw new Error("Lead save failed");
      }

      const message = encodeURIComponent(
        `Hello, my name is ${form.name}. I am interested in the course.`
      );
      window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    } catch {
      setError("Network error. Please check your connection and try again.");
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "8px",
    padding: "14px 16px",
    color: "#FFFFFF",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  };

  return (
    <section
      id="enroll"
      ref={ref}
      style={{
        background: "#0A0A0A",
        padding: "100px 5%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(245,166,35,0.08) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
          position: "relative",
        }}
        className="enroll-grid"
      >
        {/* Left: Copy */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(0)" : "translateX(-32px)",
          transition: "all 0.7s ease 0.1s",
        }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "12px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#F5A623",
            marginBottom: "16px",
            fontWeight: 600,
          }}>
            Get Started — It's Free
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 800,
            color: "#FFFFFF",
            lineHeight: 1.15,
            marginBottom: "24px",
          }}>
            Your First Step to a{" "}
            <span style={{
              background: "linear-gradient(90deg, #F5A623, #FFD080)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Better Score
            </span>{" "}
            Starts Here
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "16px",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.75,
            marginBottom: "40px",
          }}>
            Sign up for free and instantly access your first chapter's notes and
            one complete mock test. No credit card needed — just your curiosity.
          </p>

          {[
            "Free chapter notes for your subject",
            "One full mock test with analytics",
            "Invite to our offline test session",
            "WhatsApp study updates from our team",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
              <div style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: "rgba(245,166,35,0.15)",
                border: "1px solid rgba(245,166,35,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Right: Form */}
        <div style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "20px",
          padding: "48px 40px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(0)" : "translateX(32px)",
          transition: "all 0.7s ease 0.2s",
        }}>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "24px",
            fontWeight: 700,
            color: "#FFFFFF",
            marginBottom: "6px",
          }}>
            Claim Free Access
          </h3>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px",
            color: "rgba(255,255,255,0.4)",
            marginBottom: "32px",
          }}>
            Join 500+ students already learning with Codiora
          </p>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

            <div>
              <label style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 600,
                color: "rgba(255,255,255,0.5)", display: "block", marginBottom: "6px",
                letterSpacing: "0.06em", textTransform: "uppercase",
              }}>Full Name</label>
              <input
                type="text" required placeholder="e.g. Ananya Chatterjee"
                value={form.name}
                onChange={e => { setForm({ ...form, name: e.target.value }); setError(""); }}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = "rgba(245,166,35,0.5)"}
                onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
              />
            </div>

            <div>
              <label style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 600,
                color: "rgba(255,255,255,0.5)", display: "block", marginBottom: "6px",
                letterSpacing: "0.06em", textTransform: "uppercase",
              }}>WhatsApp Number</label>
              <input
                type="tel" required placeholder="+91 98765 43210"
                value={form.phone}
                onChange={e => { setForm({ ...form, phone: e.target.value }); setError(""); }}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = "rgba(245,166,35,0.5)"}
                onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div>
                <label style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 600,
                  color: "rgba(255,255,255,0.5)", display: "block", marginBottom: "6px",
                  letterSpacing: "0.06em", textTransform: "uppercase",
                }}>Class</label>
                <select
                  required value={form.classGrade}
                  onChange={e => { setForm({ ...form, classGrade: e.target.value }); setError(""); }}
                  style={{ ...inputStyle, cursor: "pointer" }}
                  onFocus={e => e.target.style.borderColor = "rgba(245,166,35,0.5)"}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                >
                  <option value="" style={{ background: "#1a1a1a" }}>Select</option>
                  {[6,7,8,9,10,11,12].map(c => (
                    <option key={c} value={`Class ${c}`} style={{ background: "#1a1a1a" }}>Class {c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 600,
                  color: "rgba(255,255,255,0.5)", display: "block", marginBottom: "6px",
                  letterSpacing: "0.06em", textTransform: "uppercase",
                }}>Board</label>
                <select
                  required value={form.board}
                  onChange={e => { setForm({ ...form, board: e.target.value }); setError(""); }}
                  style={{ ...inputStyle, cursor: "pointer" }}
                  onFocus={e => e.target.style.borderColor = "rgba(245,166,35,0.5)"}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                >
                  <option value="" style={{ background: "#1a1a1a" }}>Select</option>
                  <option value="CBSE" style={{ background: "#1a1a1a" }}>CBSE</option>
                  <option value="ICSE" style={{ background: "#1a1a1a" }}>ICSE</option>
                  <option value="State" style={{ background: "#1a1a1a" }}>State Board</option>
                </select>
              </div>
            </div>

            {error && (
              <div style={{
                background: "rgba(239,68,68,0.08)",
                border: "1px solid rgba(239,68,68,0.2)",
                borderRadius: "8px", padding: "12px 16px",
                fontFamily: "'DM Sans', sans-serif", fontSize: "13px",
                color: "#f87171", lineHeight: 1.5,
              }}>
                ⚠️ {error}
              </div>
            )}

            <button
              type="submit" disabled={loading}
              style={{
                background: loading ? "rgba(245,166,35,0.5)" : "linear-gradient(135deg, #F5A623, #E8920A)",
                color: "#0A0A0A", border: "none", borderRadius: "8px", padding: "16px",
                fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: 700,
                cursor: loading ? "not-allowed" : "pointer", marginTop: "8px",
                transition: "all 0.2s",
                boxShadow: loading ? "none" : "0 8px 24px rgba(245,166,35,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
              }}
            >
              {loading ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="#0A0A0A" strokeWidth="2.5"
                    style={{ animation: "spin 0.8s linear infinite" }}>
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                  </svg>
                  Processing...
                </>
              ) : "Get Free Access Now →"}
            </button>

            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: "11px",
              color: "rgba(255,255,255,0.3)", textAlign: "center", lineHeight: 1.6,
            }}>
              🔒 We never share your data. No spam, ever.
            </p>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .enroll-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
