import { motion } from 'motion/react';
import type { ProjectType } from '@/types';
import { fadeUp } from '@/lib/animations';

export const ProjectCard = ({
  imgSrc,
  tags,
  title,
}: ProjectType) => {
  return (
    <motion.div variants={fadeUp} className="relative">

      {/* Image Wrapper */}
      <div className="relative group overflow-hidden rounded-md">

        {/* Image */}
        <img
          src={imgSrc}
          alt={title}
          className="w-full transition duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">

          {/* Title Center */}
          <h3 className="text-white text-2xl font-semibold tracking-wide transform translate-y-6 group-hover:translate-y-0 transition duration-300">
            {title}
          </h3>

        </div>

      </div>
      
      <div className="mt-3 flex gap-2 flex-wrap">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="bg-background hover:bg-primary hover:text-black py-1 px-2 rounded-sm text-sm cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>

    </motion.div>
  );
};