'use client';

import React from 'react';
import { fadeIn, textVariant } from '../utils/motion';
import { motion } from 'framer-motion';

type HeadingProps = {
    title?: string,
    subtitle?: string,
    v2?: boolean,
}

const Heading = ({ title, subtitle, v2 } : HeadingProps) => {
  return (
    <div className="my-6 md:my-8">
        {title && <motion.h2 
          className={`title ${v2 ? 'text-white' : 'text-black'}`}
          variants={textVariant()}
        >{title}</motion.h2>}
        {subtitle && <motion.h3 
          className='text-4xl md:text-6xl text-primary xl:max-w-[40vw]'
          variants={fadeIn({ direction: 'right', type: 'spring', delay: 0, duration: 1 })}
        >{subtitle}</motion.h3>}
    </div>
  )
};

export default Heading;