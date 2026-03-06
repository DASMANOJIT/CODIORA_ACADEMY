import Navbar from "../app/components/navbar";
import Hero from "../app/components/hero";
import HowItWorks from "../app/components/howitworks";
import Courses from "../app/components/courses";
import HybridAdvantage from "../app/components/hybridadventure";
import Testimonials from "../app/components/testimonials";
import EnrollCTA from "../app/components/enrollcta";
import Footer from "../app/components/footer";

export const metadata = {
  title: "Codiora Academy | Top Online & Offline Classes for K-12 Students",
  description:
    "Master your school syllabus with Codiora Academy. Access expertly crafted study materials, chapter-wise test papers, and join interactive online or offline classes. Start learning today!",
  keywords:
    "best coaching institute Barrackpore, CBSE class 12 study material, ICSE mock tests, offline test series near me, free school notes PDF, online classes class 10",
};

export default function Home() {
  return (
    <main style={{ background: "#0A0A0A", minHeight: "100vh" }}>
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