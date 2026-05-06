import { lazy, Suspense } from "react";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import EducationSection from "../components/EducationSection";
import ContactSection from "../components/ContactSection";

const ScrollScene3D = lazy(() => import("../components/ScrollScene3D"));

export default function Home() {
  return (
    <>
      <Suspense fallback={
        <div className="h-screen flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-amber-500/30 border-t-amber-500 rounded-full animate-spin" />
        </div>
      }>
        <ScrollScene3D />
      </Suspense>

      <div className="max-w-5xl mx-auto px-6 py-8 md:py-10">
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </div>
    </>
  );
}
