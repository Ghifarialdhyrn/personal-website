'use client';

import { fadeUp, staggerContainer } from '@/lib/animations';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { services } from '@/constants';
import { ServicesCard } from '../cards/ServicesCard';

export const ServicesSection = () => {
  return (
    <motion.section
      id='services'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-24'
    >
      <SectionHeader
        subtitle='Services'
        title='Building with Purposes & Precision'
      />

      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.5)}
        className='grid md:grid-cols-2 gap-10 mt-10'
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={fadeUp}
          >
            <ServicesCard service={service} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
