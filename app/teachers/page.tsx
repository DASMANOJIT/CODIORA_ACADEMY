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
  title: "Our Teachers at Codiora Academy",
  description:
    "Learn about Codiora Academy teachers: experienced educators for students from Class 6 to Class 12, offering CBSE and ICSE academic guidance, personalized exam preparation mentorship, and modern performance-focused learning support.",
  keywords: seoKeywords,
};

export default function TeachersPage() {
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
      <header style={{ marginBottom: "44px" }}>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(34px, 5vw, 58px)",
            lineHeight: 1.1,
            marginBottom: "14px",
            fontWeight: 800,
          }}
        >
          Our Teachers at Codiora Academy
        </h1>
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "16px", lineHeight: 1.8, maxWidth: "75ch" }}>
          A team of passionate educators dedicated to helping students succeed in academics and beyond.
        </p>
      </header>

      <section aria-labelledby="experienced-educators" style={{ marginBottom: "28px" }}>
        <h2 id="experienced-educators" style={{ fontSize: "18px", marginBottom: "10px", fontWeight: 900 }}>
          Experienced Educators
        </h2>
        <p style={{ color: "rgba(255,255,255,0.62)", lineHeight: 1.9 }}>
          Codiora Academy teachers are experienced educators for students across Class 6 to Class 10. Our faculty
          understands curriculum depth, exam patterns, and the learning pace required for steady improvement. Whether a
          student follows CBSE or ICSE, our CBSE and ICSE academic guidance focuses on building strong fundamentals first,
          then converting that understanding into marks with targeted practice.
        </p>
      </section>

      <hr style={{ border: 0, borderTop: "1px solid rgba(255,255,255,0.08)", margin: "26px 0" }} />

      <section aria-labelledby="mentorship" style={{ marginBottom: "28px" }}>
        <h2 id="mentorship" style={{ fontSize: "18px", marginBottom: "10px", fontWeight: 900 }}>
          Personalized Student Mentorship
        </h2>
        <p style={{ color: "rgba(255,255,255,0.62)", lineHeight: 1.9 }}>
          We believe confidence grows with clarity. Teachers provide personalized learning support through individual
          attention, doubt resolution, and concept reinforcement. As an online learning platform for students, Codiora
          Academy combines structured sessions with exam preparation mentorship: question-selection strategies, time
          management, and step-by-step methods that help students perform consistently in tests and final exams.
        </p>
      </section>

      <hr style={{ border: 0, borderTop: "1px solid rgba(255,255,255,0.08)", margin: "26px 0" }} />

      <section aria-labelledby="modern-approach" style={{ marginBottom: "28px" }}>
        <h2 id="modern-approach" style={{ fontSize: "18px", marginBottom: "10px", fontWeight: 900 }}>
          Modern Teaching Approach
        </h2>
        <p style={{ color: "rgba(255,255,255,0.62)", lineHeight: 1.9 }}>
          Our teachers combine concept-driven teaching with structured study materials and frequent mock tests. With
          performance tracking and regular feedback, students understand where they stand and what to improve next. This
          clear process supports class 6 to 12 study guidance and builds strong daily learning habits.
        </p>
      </section>

      <hr style={{ border: 0, borderTop: "1px solid rgba(255,255,255,0.08)", margin: "26px 0" }} />

      <section aria-labelledby="student-success" style={{ marginBottom: "32px" }}>
        <h2 id="student-success" style={{ fontSize: "18px", marginBottom: "10px", fontWeight: 900 }}>
          Focus on Student Success
        </h2>
        <p style={{ color: "rgba(255,255,255,0.62)", lineHeight: 1.9 }}>
          Codiora Academy teachers focus on exam preparation, conceptual understanding, academic confidence, and long-term
          learning habits. Our expert teachers for school students help learners build skills that last beyond a single
          exam. With academic coaching for students and a supportive student mentorship platform, students carry these
          habits into higher classes with confidence.
        </p>
      </section>

      <section aria-labelledby="cta" style={{ marginBottom: "40px" }}>
        <h2 id="cta" style={{ fontSize: "18px", marginBottom: "10px", fontWeight: 800 }}>
          Learn With Us
        </h2>
        <p style={{ color: "rgba(255,255,255,0.62)", lineHeight: 1.85, marginBottom: "14px" }}>
          Want mentor guidance and practice resources? Enroll free on the homepage.
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
          Go to Enroll
        </Link>
      </section>

      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "18px" }}>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px", lineHeight: 1.7 }}>
          Placeholder page for future teachers and mentorship content.
        </p>
      </footer>
    </main>
  );
}
