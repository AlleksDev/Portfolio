import React from 'react';
import MainLayout from '../../components/templates/MainLayout/MainLayout';
import HeroSection from '../../components/organisms/HeroSection/HeroSection';
import AboutSection from '../../components/organisms/AboutSection/AboutSection';
import ExperienceSection from '../../components/organisms/ExperienceSection/ExperienceSection';
import ProjectsSection from '../../components/organisms/ProjectsSection/ProjectsSection';
import SkillsSection from '../../components/organisms/SkillsSection/SkillsSection';
import ContactSection from '../../components/organisms/ContactSection/ContactSection';

const HomePage = () => {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </MainLayout>
  );
};

export default HomePage;
