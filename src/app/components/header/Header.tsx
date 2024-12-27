'use client';

import Navbar from './Navbar';
import Container from '../Container';
import Logo from '../Logo';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from "@/lib/utils"

type HeaderProps = {
  className?: string | undefined;
  isLogoV2?: boolean;
}

const Header = ({ className, isLogoV2 }: HeaderProps) => {
  const [isOnScroll, setIsOnScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleOnScroll = () => {
      if (window.scrollY > 50) {
        setIsOnScroll(true);
      } else {
        setIsOnScroll(false);
      }
    };

    window.addEventListener('scroll', handleOnScroll);

    return () => {
      window.removeEventListener('scroll', handleOnScroll);
    };
  }, []);

  return (
    <header className={cn(
              `fixed 
              w-full 
              border-b-[1px] 
              ${isOnScroll ? 'bg-white md:text-black' : 'bg-transparent'} 
              text-white 
              border-gray 
              z-10 
              shadow-sm 
              py-4`, className)}>
        <Container>
            <div className='flex justify-between items-center'>
                <Logo isOnScroll={isOnScroll} isLogoV2={isLogoV2} />
                <div className="hidden md:flex flex-col gap-5">
                  <div className="flex items-center gap-2">
                    <FaPhoneAlt size={14} />
                    <a href="tel:+380672324634" className="hover:text-primary transition">+380935390303</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt size={16} />
                    <Link href='/#footer'>
                      <p className='underline underline-offset-4 hover:text-primary transition'>м. Львів вул. Народна, 19</p>
                    </Link>
                  </div>
                </div>
                <Navbar />
            </div>
        </Container>
    </header>
  );
};

export default Header;