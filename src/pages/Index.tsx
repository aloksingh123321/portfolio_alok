import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Alok Kumar Singh | Computer Science Engineer & Innovator</title>
        <meta
          name="description"
          content="Portfolio of Alok Kumar Singh - Aspiring Computer Science Engineer specializing in Python, AI/ML, and Cybersecurity. B.Tech CS Student (2027) at Shri Ramswaroop Memorial University."
        />
        <meta
          name="keywords"
          content="Alok Kumar Singh, Computer Science, Python Developer, AI/ML, Cybersecurity, Portfolio, Software Engineer"
        />
        <meta name="author" content="Alok Kumar Singh" />
        <link rel="canonical" href="https://aloksingh.dev" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
