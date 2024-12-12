'use client';

import Image from 'next/image';
import { Link } from 'next-view-transitions';

type LogoProps = {
  isOnScroll?: boolean;
  isLogoV2?: boolean;
}

const Logo = ({ isOnScroll, isLogoV2 } : LogoProps) => {
  const logoSrc = '/images/logo.webp';
  const logoSrcV2 = '/images/logo-v2.webp';

  return (
    <Link href='/' className='cursor-pointer'>
      <Image
        className='w-[90px] h-[80px] md:w-[128px] md:h-[115px]'
        src={isOnScroll || isLogoV2 ? logoSrcV2 : logoSrc }
        alt='Логотип Газ Майстер'
        width={90}
        height={80}
      />
    </Link>
  );
};

export default Logo;