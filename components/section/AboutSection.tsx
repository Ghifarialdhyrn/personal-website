'use client';

import { fadeUp, staggerContainer } from '@/lib/animations';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { Button } from '../ui/button';

export const AboutSection = () => {
  return (
    <motion.section
      id='about'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-24'
    >
      <SectionHeader
        subtitle='About'
        title='Building modern web experiences with code and creativity'
      />

      <motion.p
        variants={fadeUp}
        className='mt-4 text-neutral-300 text-justify'
      >
        I am a fresh graduate from Universitas Pendidikan Indonesia with a
        strong passion for web development. I have experience building dynamic
        and responsive user interfaces using React.js, HTML, CSS, and JavaScript
        (ES6+), along with modern styling frameworks such as Tailwind CSS and
        Bootstrap. In addition to frontend development, I also have experience
        building backend services using Express.js and PHP, including developing
        RESTful APIs and integrating them with frontend applications. I am
        skilled in API integration, component-based architecture, responsive
        design, and frontend performance optimization to deliver efficient and
        user-friendly web applications.
      </motion.p>

      <motion.p
        variants={fadeUp}
        className='mt-2 text-neutral-300 text-justify'
      >
        Beyond web development, I also have a passion for video editing and
        content creation using the CapCut application, where I enjoy creating
        engaging visual content and exploring creative storytelling through
        video. I am committed to continuous learning and staying up to date
        with modern web technologies and best practices. I am eager to
        contribute to impactful projects and grow as a professional fullstack
        web developer and video editor.
      </motion.p>

      <motion.div variants={fadeUp} transition={{ delay: 0.2 }}>
        <Button asChild className='mt-5'>
          <a
            href='https://wa.me/6285951816788?text=Hello%20Ghifari%2C%20I%20am%20interested%20in%20working%20with%20you.'
            target='_blank'
            rel='noopener noreferrer'
          >
            Contact Me
          </a>
        </Button>
      </motion.div>
    </motion.section>
  );
};