import type { Metadata } from "next";
import Link from "next/link";
import BackButton from "../components/BackButton";

const seoKeywords = [
  "Codiora Academy",
  "online learning platform for students",
  "free study materials",
  "CBSE ICSE study resources",
  "online mock tests for students",
  "exam preparation platform",
  "student mentorship platform",
  "class 6 to 12 study material",
  "digital learning resources",
  "academic support for students",
  "online education platform",
  "study notes and mock tests",
  "student learning portal",
];

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read Codiora Academy blog posts on study notes, free study materials, CBSE ICSE study resources, online mock tests for students, and exam preparation tips for class 6 to 12.",
  keywords: seoKeywords,
};

export default function BlogPage() {
  return (
    <main
      style={{
        maxWidth: "980px",
        margin: "0 auto",
        padding: "96px 5% 72px",
      }}
    >
      <div style={{ marginBottom: "26px" }}>
        <BackButton label="Back" />
      </div>
      <header style={{ marginBottom: "40px" }}>
        <p
          style={{
            fontSize: "12px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(245,166,35,0.9)",
            marginBottom: "14px",
            fontWeight: 700,
          }}
        >
          Study Notes and Mock Tests
        </p>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(34px, 5vw, 56px)",
            lineHeight: 1.1,
            marginBottom: "14px",
            fontWeight: 800,
          }}
        >
          Blog
        </h1>
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "16px", lineHeight: 1.8, maxWidth: "75ch" }}>
          This is a placeholder for future articles. We will publish study tips, exam preparation guides, and curated CBSE
          ICSE study resources for students from class 6 to 12.
        </p>
      </header>

      <section aria-labelledby="latest" style={{ marginBottom: "32px" }}>
        <h2 id="latest" style={{ fontSize: "18px", marginBottom: "10px", fontWeight: 800 }}>
          Latest Posts (Coming Soon)
        </h2>
        <div
          role="list"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "14px",
          }}
        >
          {[
            { title: "How to plan weekly revision", desc: "A simple routine using digital learning resources." },
            { title: "Mock tests that actually improve scores", desc: "How online mock tests for students help." },
            { title: "CBSE vs ICSE: what changes in preparation", desc: "Using CBSE ICSE study resources effectively." },
          ].map((card) => (
            <article
              key={card.title}
              role="listitem"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.03)",
                borderRadius: "16px",
                padding: "16px",
              }}
            >
              <h3 style={{ fontSize: "15px", fontWeight: 800, marginBottom: "8px" }}>{card.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.75, fontSize: "13px" }}>{card.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="cta" style={{ marginBottom: "40px" }}>
        <h2 id="cta" style={{ fontSize: "18px", marginBottom: "10px", fontWeight: 800 }}>
          Want Free Materials?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.62)", lineHeight: 1.85, marginBottom: "14px" }}>
          Get free study materials and start with a practice mock test on the homepage.
        </p>
        <Link
          href="/#enroll"
          style={{
            display: "inline-block",
            background: "linear-gradient(90deg, #F5A623, #FFD080)",
            color: "#111",
            fontWeight: 800,
            textDecoration: "none",
            padding: "12px 16px",
            borderRadius: "12px",
          }}
        >
          Enroll Now
        </Link>
      </section>

      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "18px" }}>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px", lineHeight: 1.7 }}>
          Placeholder page for future blog content on online education platform topics.
        </p>
      </footer>
    </main>
  );
}
