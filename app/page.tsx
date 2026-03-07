import Navbar from "../app/components/navbar";
import Hero from "../app/components/hero";
import HowItWorks from "../app/components/howitworks";
import Courses from "../app/components/courses";
import HybridAdvantage from "../app/components/hybridadventure";
import Testimonials from "../app/components/testimonials";
import EnrollCTA from "../app/components/enrollcta";
import Footer from "../app/components/footer";
import Script from 'next/script';

export const metadata = {
  title: 'Codiora Academy | Top Online Classes & Best Coaching in Barrackpore',
  description: 'Join Codiora Academy for premium online classes across India and offline coaching from Belgharia to Shyamnagar. Get study materials, mock tests, and expert guidance.',
  keywords: [
    'best coaching institute in Barrackpore',
    'offline tuition classes near me',
    'top coaching center in North 24 Parganas',
    'best online classes for school students',
    'free online test series for class 10',
    'CBSE study material PDF',
    'ICSE previous year solved papers',
    'school coaching classes in Shyamnagar',
    'best science tuition in Belgharia',
    'Master your school syllabus with Codiora Academy. Access expertly crafted study materials, chapter-wise test papers, and join interactive online or offline classes. Start learning today!',
     'best coaching institute Barrackpore, CBSE class 12 study material, ICSE mock tests, offline test series near me, free school notes PDF, online classes class 10'
  ],
  openGraph: {
    type: 'website',
    url: 'https://www.codioraacademy.com/',
    title: 'Codiora Academy | Master Your School Exams',
    description: 'Access premium study materials, online test series, and offline coaching at our Barrackpore main branch.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codiora Academy | Master Your School Exams',
    description: 'Access premium study materials, online test series, and offline coaching at our Barrackpore main branch.',
    images: ['/images/logo.jpg'],
  },
};

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Codiora Academy",
    "image": "https://www.codioraacademy.com/images/logo.jpg",
    "description": "Premium online and offline coaching institute for school students.",
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
    "url": "https://www.codioraacademy.com"
  };
  return (
    <main style={{ background: "#0A0A0A", minHeight: "100vh" }}>
      {/* Injecting Local SEO Schema */}
      <Script id="local-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(localBusinessSchema)}
      </Script>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Courses />
      <HybridAdvantage />
      <Testimonials />
      <EnrollCTA />
      <Footer />
    </main>
  );
}