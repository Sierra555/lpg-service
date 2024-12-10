'use client';

import React from 'react';
import { motion } from 'framer-motion'
import { staggerContainer } from '@/app/utils/motion';

type SectionProps = {
    id: string,
    children: React.ReactNode,
}

const Section = ({ id, children } : SectionProps) => {
  return (
    <motion.section 
      className="pb-[80px] pt-[40px] md:pb-[150px] md:pt-[100px] bg-cover bg-center bg-no-repeat" aria-label={id} id={id}
      variants={staggerContainer({ staggerChildren: 0.1, delayChildren: 0.2 }) }
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: .25 }}
    >
        {children}
    </motion.section>
  );
};

export default Section;