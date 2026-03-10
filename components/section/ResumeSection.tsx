'use client';

import { fadeUp, staggerContainer } from '@/lib/animations';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { education, experience, tools } from '@/constants';
import { ToolsCard } from '../cards/ToolsCard';
import { ExpCard } from '../cards/ExpCard';

export const ResumeSection = () => {
  return (
    <motion.section
      id='resume'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-24'
    >
      <SectionHeader
        subtitle='Resume'
        title='Education and practical experience'
      />

      <motion.p
        variants={fadeUp}
        className='mt-4 text-neutral-300 text-justify'
      >
        with a background in Computer Science
        and hands-on experience in web development, I have developed strong
        technical and problem-solving skills through both academic learning and
        real-world projects. My educational journey has provided a solid
        foundation in software engineering, programming, and web technologies,
        while practical experiences such as internships and personal projects
        have allowed me to apply these concepts in real applications. During my
        learning process, I have built responsive and dynamic web interfaces
        using modern technologies such as React.js, HTML, CSS, JavaScript, and
        Tailwind CSS. I also have experience developing backend services using
        Express.js and PHP, enabling me to create and integrate RESTful APIs
        with frontend applications. Beyond web development, I continuously
        explore creative skills such as video editing and content creation using
        tools like CapCut, combining technical knowledge with creativity to
        produce engaging digital content. Through education and practical
        experience, I strive to continuously improve my skills and contribute to
        building modern, user-friendly digital solutions.
      </motion.p>

      <div className='grid gap-x-10 my-16 md:grid-cols-2'>
        <motion.div
          variants={fadeUp}
          className='mb-16 md:mb-0'
        >
          <h2 className='text-3xl font-semibold mb-8'>Education</h2>

          <div className='space-y-8 border-l border-neutral-700 pl-6'>
            {education.map((item, i) => (
              <ExpCard
                key={i}
                item={item}
              />
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h2 className='text-3xl font-semibold mb-8'>Work Experience</h2>

          <div className='space-y-8 border-l border-border pl-6'>
            {experience.map((item, i) => (
              <ExpCard
                key={i}
                item={item}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <div className='my-16'>
        <motion.h2
          variants={fadeUp}
          className='text-3xl font-semibold mb-8 capitalize'
        >
          My Favorite Tools
        </motion.h2>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer(0.5)}
          className='grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5'
        >
          {tools.map((tool, i) => (
            <ToolsCard
              key={i}
              tool={tool}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
