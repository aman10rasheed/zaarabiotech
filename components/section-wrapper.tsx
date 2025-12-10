'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'mint' | 'sage' | 'forest';
}

export const SectionWrapper = ({
  children,
  className = '',
  id,
  background = 'white',
}: SectionWrapperProps) => {
  const bgClasses = {
    white: 'bg-white',
    mint: 'bg-[#f0fdf4]',
    sage: 'bg-[#dcfce7]',
    forest: 'bg-[#166534]',
  };

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`${bgClasses[background]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {children}
      </div>
    </motion.section>
  );
};

export default SectionWrapper;

