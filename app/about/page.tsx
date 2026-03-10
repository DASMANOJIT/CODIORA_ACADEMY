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
  title: "About Codiora Academy",
  description:
    "Learn about Codiora Academy, an online learning platform for students offering free study materials, CBSE ICSE study resources, online mock tests for students, and student mentorship for exam preparation.",
  keywords: seoKeywords,
};

export default function AboutPage() {
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
          Codiora Academy
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
          About Codiora
        </h1>
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "16px", lineHeight: 1.8, maxWidth: "70ch" }}>
          We are building an exam preparation platform that blends free study materials, CBSE ICSE study resources,
          online mock tests for students, and student mentorship to support learners from class 6 to 12.
        </p>
      </header>

      <section aria-labelledby="mission" style={{ marginBottom: "32px" }}>
        <h2 id="mission" style={{ fontSize: "18px", marginBottom: "10px", fontWeight: 800 }}>
          Our Mission
        </h2>
        <p style={{ color: "rgba(255,255,255,0.62)", lineHeight: 1.85 }}>
          Make high-quality digital learning resources accessible, consistent, and measurable. This page is a placeholder
          for future content like our story, values, and approach to academic support for students.
        </p>
      </section>

      <section aria-labelledby="what-we-offer" style={{ marginBottom: "32px" }}>
        <h2 id="what-we-offer" style={{ fontSize: "18px", marginBottom: "10px", fontWeight: 800 }}>
          What We Offer
        </h2>
        <ul style={{ paddingLeft: "18px", color: "rgba(255,255,255,0.62)", lineHeight: 1.9 }}>
          <li>Free study materials and study notes for key chapters</li>
          <li>Online mock tests for students with performance insights</li>
          <li>CBSE and ICSE study resources for class 6 to 12</li>
          <li>Student mentorship support for exam preparation</li>
        </ul>
      </section>

      <section aria-labelledby="next-steps" style={{ marginBottom: "40px" }}>
        <h2 id="next-steps" style={{ fontSize: "18px", marginBottom: "10px", fontWeight: 800 }}>
          Get Started
        </h2>
        <p style={{ color: "rgba(255,255,255,0.62)", lineHeight: 1.85, marginBottom: "14px" }}>
          Ready to explore the student learning portal? Jump back to the landing page and enroll in seconds.
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
          Enroll for Free
        </Link>
      </section>

      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "18px" }}>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px", lineHeight: 1.7 }}>
          Placeholder page for future About content. Keywords: online education platform, student mentorship platform,
          exam preparation platform.
        </p>
      </footer>
    </main>
  );
}
