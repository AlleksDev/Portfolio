import MainLayout from '../../templates/MainLayout/MainLayout';
import HeroSection from '../../organisms/HeroSection/HeroSection';
import AboutSection from '../../organisms/AboutSection/AboutSection';
import ExperienceSection from '../../organisms/ExperienceSection/ExperienceSection';
import ProjectsSection from '../../organisms/ProjectsSection/ProjectsSection';
import SkillsSection from '../../organisms/SkillsSection/SkillsSection';
import ContactSection from '../../organisms/ContactSection/ContactSection';

function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </MainLayout>
  );
}

export default HomePage;
