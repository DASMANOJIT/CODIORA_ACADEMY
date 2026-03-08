import Navbar from "../app/components/navbar";
import Hero from "../app/components/hero";
import HowItWorks from "../app/components/howitworks";
import Courses from "../app/components/courses";
import HybridAdvantage from "../app/components/hybridadventure";
import Testimonials from "../app/components/testimonials";
import EnrollCTA from "../app/components/enrollcta";
import InstagramFeed from "../app/components/InstagramFeed";
import YoutubeFeed from "../app/components/YoutubeFeed";
import Footer from "../app/components/footer";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Codiora Academy | Online Learning Platform for Students & Free Study Notes",
  description:
    "Codiora Academy is an online learning platform for students offering free study notes for class 6 to 12, CBSE ICSE study resources, online mock tests for students, exam preparation resources, and online mentorship through a student learning platform.",
  keywords: [
    "Codiora Academy",
    "Free study materials",
    "Online mentorship",
    "Student learning platform",
    "Mock tests",
    "Study resources",
    "Exam preparation",
    "online learning platform for students",
    "free study notes for class 6 to 12",
    "CBSE ICSE study resources",
    "online mock tests for students",
    "exam preparation resources",
    "student mentorship platform",
    "best online learning resources",
    "free educational content for students",
    "class 6 to 12 study material",
    "student academic support platform",
    "online study portal",
    "free learning platform for school students",
    "digital education resources",
    "study notes and practice tests",
    "student success platform",
  ],
  alternates: {
    canonical: "https://www.codioraacademy.com/",
  },
  openGraph: {
    type: "website",
    url: "https://www.codioraacademy.com/",
    title: "Codiora Academy | Best Online Learning Resources for Students",
    description:
      "Free educational content for students, class 6 to 12 study material, online mock tests, and exam preparation resources in one student academic support platform.",
    siteName: "Codiora Academy",
    images: ["/images/logo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Codiora Academy | Student Success Platform",
    description:
      "Explore free study notes for class 6 to 12, CBSE ICSE study resources, online mentorship, and online mock tests for students.",
    images: ["/images/logo.jpg"],
  },
};

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Codiora Academy",
    "image": "https://www.codioraacademy.com/images/logo.jpg",
    "description":
      "Codiora Academy is an online study portal and student mentorship platform with class 6 to 12 study material, free study notes, mock tests, and exam preparation resources.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Barrackpore",
      "addressRegion": "West Bengal",
      "addressCountry": "IN"
    },
    "areaServed": [
      "Barrackpore",
      "Belgharia",
      "Sodepur",
      "Khardaha",
      "Shyamnagar",
      "Palta"
    ],
    "url": "https://www.codioraacademy.com",
    "knowsAbout": [
      "CBSE ICSE study resources",
      "online mock tests for students",
      "free educational content for students",
      "study notes and practice tests",
      "student academic support platform"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Codiora Academy",
    "url": "https://www.codioraacademy.com",
    "description":
      "Best online learning resources with free study notes for class 6 to 12, digital education resources, and student mentorship.",
    "keywords": [
      "online learning platform for students",
      "free study notes for class 6 to 12",
      "online mock tests for students",
      "student success platform"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Codiora Academy Student Learning Platform",
    "provider": {
      "@type": "Organization",
      "name": "Codiora Academy"
    },
    "serviceType": "Online education and mentorship",
    "description":
      "Free learning platform for school students with CBSE ICSE study resources, free study materials, study notes and practice tests, and exam preparation.",
    "areaServed": "India"
  };

  return (
    <main style={{ background: "#0A0A0A", minHeight: "100vh" }}>
      {/* Injecting Local SEO Schema */}
      <Script id="local-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(localBusinessSchema)}
      </Script>
      <Script id="website-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(websiteSchema)}
      </Script>
      <Script id="service-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(serviceSchema)}
      </Script>

      <header>
        <Navbar />
      </header>
      <section aria-label="Codiora Academy student learning platform hero section">
        <Hero />
      </section>
      <section aria-label="How the online learning platform for students works">
        <HowItWorks />
      </section>
      <section aria-label="Free study notes for class 6 to 12 and CBSE ICSE study resources">
        <Courses />
      </section>
      <section aria-label="Student academic support platform and online mentorship">
        <HybridAdvantage />
      </section>
      <section aria-label="Student success platform testimonials and exam preparation results">
        <Testimonials />
      </section>
      
      <section aria-label="Latest free educational content for students from Instagram">
        <InstagramFeed />
      </section>
      <section aria-label="Latest digital education resources and study videos from YouTube">
        <YoutubeFeed />
      </section>
      <section aria-label="Enroll for free study materials and online mock tests for students">
        <EnrollCTA />
      </section>
      <Footer />
    </main>
  );
}
