"use client";

import Link from "next/link";

export default function Footer() {
  const links = {
    "Learn": [
      { label: "CBSE Materials", href: "https://drive.google.com/drive/folders/195C7fPLymEjnM8q4r6Z0Zamp5raJo9jE?usp=sharing" },
      { label: "ICSE Materials", href: "https://drive.google.com/drive/folders/195C7fPLymEjnM8q4r6Z0Zamp5raJo9jE?usp=sharing" },
      { label: "Chapter Notes", href: "https://drive.google.com/drive/folders/195C7fPLymEjnM8q4r6Z0Zamp5raJo9jE?usp=sharing" },
      { label: "Revision Guides", href: "https://drive.google.com/drive/folders/195C7fPLymEjnM8q4r6Z0Zamp5raJo9jE?usp=sharing" },
      { label: "Video Lessons", href: "https://youtube.com/@codioraacademy?si=pUWxEBYry8kKg1Tt" },
    ],
    "Practice": [
      { label: "Online Mock Tests", href: "/#enroll" },
      { label: "Offline Test Series", href: "/#enroll" },
      { label: "Previous Year Papers", href: "/#enroll" },
      { label: "Subject Tests", href: "/#enroll" },
      { label: "Performance Reports", href: "/#enroll" },
    ],
    "Company": [
      { label: "About Codiora", href: "/about" },
      { label: "Our Teachers", href: "/teachers" },
      { label: "Blog", href: "/blog" },
      { label: "Contact Us", href: "/#enroll" },
      { label: "Locate Our Center", href: "#" },
    ],
  };

  const socials = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/codiora_academy/",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "https://youtube.com/@codioraacademy?si=zO5wAaXMDiSjLAJU",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.95 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
        </svg>
      ),
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/91XXXXXXXXXX",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      ),
    },
  ];

  const isInternalHref = (href) => typeof href === "string" && href.startsWith("/");

  return (
    <footer style={{
      background: "#080808",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "80px 5% 32px",
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Top row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "48px",
          marginBottom: "64px",
        }}
        className="footer-grid"
        >
          {/* Brand */}
          <div>
            <img
              src="/logo.png"
              alt="Codiora Academy student success platform logo with free study materials and online mentorship"
              style={{ height: "120px", marginBottom: "20px" }}
            />
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.8,
              maxWidth: "280px",
              marginBottom: "28px",
            }}>
              Empowering school students with expert study materials, online tests, and offline exam centers across Barrackpore and beyond.
            </p>
            {/* Social Icons */}
            <div style={{ display: "flex", gap: "12px" }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#F5A623";
                    e.currentTarget.style.borderColor = "rgba(245,166,35,0.3)";
                    e.currentTarget.style.background = "rgba(245,166,35,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.7)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}>
                {group}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {items.map((item) => (
                  <li key={item.label}>
                    {item.href === "#" ? (
                      <a
                        href="#"
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "14px",
                          color: "rgba(255,255,255,0.4)",
                          textDecoration: "none",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) => e.target.style.color = "#F5A623"}
                        onMouseLeave={(e) => e.target.style.color = "rgba(255,255,255,0.4)"}
                      >
                        {item.label}
                      </a>
                    ) : isInternalHref(item.href) ? (
                      <Link
                        href={item.href}
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "14px",
                          color: "rgba(255,255,255,0.4)",
                          textDecoration: "none",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) => e.target.style.color = "#F5A623"}
                        onMouseLeave={(e) => e.target.style.color = "rgba(255,255,255,0.4)"}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "14px",
                          color: "rgba(255,255,255,0.4)",
                          textDecoration: "none",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) => e.target.style.color = "#F5A623"}
                        onMouseLeave={(e) => e.target.style.color = "rgba(255,255,255,0.4)"}
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* SEO keyword strip */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          padding: "20px 0",
          marginBottom: "32px",
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
        }}>
          {[
            "Best coaching institute in Barrackpore",
            "CBSE Class 12 study material",
            "ICSE mock tests online",
            "Offline test series near me",
            "Free school notes PDF",
            "Online classes for Class 10",
          ].map((kw) => (
            <span key={kw} style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              color: "rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: "100px",
              padding: "4px 12px",
            }}>
              {kw}
            </span>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
        }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px",
            color: "rgba(255,255,255,0.25)",
          }}>
            © {new Date().getFullYear()} Codiora Academy. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-of-service" },
              { label: "Refund Policy", href: "/refund-policy" },
            ].map((item) => (
              <a key={item.label} href={item.href} style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                color: "rgba(255,255,255,0.25)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => e.target.style.color = "rgba(245,166,35,0.7)"}
              onMouseLeave={(e) => e.target.style.color = "rgba(255,255,255,0.25)"}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
          .footer-grid > div:first-child {
            grid-column: 1 / -1;
          }
        }
      `}</style>
    </footer>
  );
}
