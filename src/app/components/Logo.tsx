'use client';

import Image from 'next/image';
import Link from 'next/link';

type LogoProps = {
  isOnScroll?: boolean,
}

const Logo = ({ isOnScroll } : LogoProps) => {
  return (
    <Link href='/' className='cursor-pointer'>
      <Image
        className='w-[90px] h-[80px] md:w-[128px] md:h-[115px]'
        src= {isOnScroll ? '/images/logo-v2.webp' : '/images/logo.webp'}
        alt='Логотип Газ Майстер'
        width={90}
        height={80}
      />
    </Link>
  );
};

export default Logo;