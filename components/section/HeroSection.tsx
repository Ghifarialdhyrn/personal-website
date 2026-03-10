'use client';

import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { SparkleIcon } from 'lucide-react';
import { Button } from '../ui/button';

export const HeroSection = () => {
  return (
    <motion.section
      id='hero'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='scroll-mt-24'
    >
      <motion.p
        variants={fadeUp}
        className='flex items-center justify-center py-1 gap-2 border border-neutral-600 rounded-sm w-32'
      >
        <SparkleIcon size={15} />
        <span>Introduction</span>
      </motion.p>

      <motion.h1
        variants={fadeUp}
        className='text-4xl md:text-5xl lg:text-6xl font-semibold capitalize mt-2 max-w-4xl md:leading-16'
      >
        {`I'm`}{' '}
        <span className='text-primary'>
          Ghifarialdhy Rahmansyah Nitikusumah
        </span>
        <br />
        Fullstack Web Developer & Video Editor
      </motion.h1>

      <motion.div
        variants={fadeUp}
        className='mt-5 flex gap-2'
      >
        <Button asChild>
          <a href='#projects'>My Project</a>
        </Button>

        <Button variant='outline'>Download CV</Button>
      </motion.div>
    </motion.section>
  );
};
