"use client"

import { useEffect } from 'react';

import Lenis from 'lenis'
import { HeroSection } from './section/HeroSection';
import { StatsSection } from './section/StatsSection';
import { ProjectSection } from './section/ProjectSection';
import { AboutSection } from './section/AboutSection';
import { ServicesSection } from './section/ServicesSection';
import { ResumeSection } from './section/ResumeSection';
import { ContactSection } from './section/ContactSection';

export const App = () => {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: any) {
      lenis.raf(time)

      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main className='flex flex-col container mx-auto p-10 max-w-4xl lg:max-w-6xl lg:pl-10 lg:pr-10 mt-20'>
      <HeroSection />
      <StatsSection />
      <ProjectSection />
      <AboutSection />
      <ServicesSection />
      <ResumeSection />
      <ContactSection />
    </main>
  );
};
