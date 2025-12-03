import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import EducationSection from "../components/EducationSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8 md:py-10">
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
}
