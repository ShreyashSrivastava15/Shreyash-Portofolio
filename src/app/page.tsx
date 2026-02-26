import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import DynamicProfileImage from "@/components/dynamic-profile-image";

export default function Home() {
  return (
    <main className="relative">
      <DynamicProfileImage />
      <div className="flex flex-col gap-0">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
