'use client';

import { motion } from 'motion/react';
import { staggerContainer } from '@/lib/animations';
import { projectsData } from '@/constants';
import { SectionHeader } from './SectionHeader';
import { ProjectCard } from '../cards/ProjectCard';

export const ProjectSection = () => {
  return (
    <motion.section
      id='projects'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-24'
    >
      
      {/* Header + See All */}
      <div className="flex flex-col justify-between gap-3">
        <SectionHeader
          subtitle='Projects'
          title='My Featured Projects'
        />

        <a
          href="#"
          className="text-sm text-neutral-400 hover:text-white transition"
        >
          See All →
        </a>
      </div>

      <motion.div
        className='grid md:grid-cols-2 gap-10 mt-10'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.5)}
      >
        {projectsData.map((project, i) => (
          <ProjectCard
            key={i}
            imgSrc={project.imgSrc}
            projectLink={project.projectLink}
            tags={project.tags}
            title={project.title}
          />
        ))}
      </motion.div>

    </motion.section>
  );
};