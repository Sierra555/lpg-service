'use client';

import React, { Suspense } from 'react';
import Container from './Container';
import Logo from './Logo';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { SocialLink, socials } from '../constants';
import dynamic from 'next/dynamic';
import { Link } from 'next-view-transitions';
const Map = dynamic(() => import('./Map'), { ssr: false });

const Footer = () => {
  return (
    <footer className='bg-secondary pb-[60px] pt-[40px] md:pb-[100px] md:pt-[100px]' id='footer'>
        <Container>
            <div className="flex flex-col gap-5 md:flex-row justify-evenly items-center text-white pb-14 border-b-[1px]">
                <div className="flex flex-col gap-5 items-center md:items-start">
                    <Logo />
                    <div className="flex items-center gap-2">
                        <FaEnvelope size={14} />
                        <a href="mailto:email@gmail.com" className="hover:text-primary">email@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt size={14} />
                        <a href="tel:+380672324634" className="hover:text-primary">+380672324634</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaMapMarkerAlt size={16} />
                        <p>м. Львів вул. Народна, 7</p>
                    </div>
                    <div>
                    <p className='pb-2'>Ми у соцмережах:</p>
                    <hr />
                    <ul className='pt-2 flex gap-2 justify-center items-center'>
                        {socials.map(({link, label, icon: Icon} : SocialLink) => (
                            <li key={label}>
                                <a href={link} aria-label={label}>
                                    <Icon size={30} color="white" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                </div>
                <div className="relative w-full md:w-[500px] h-full">
                    <Suspense fallback={<div>Loading map...</div>}>
                        <Map center={[49.831588841979254, 23.984998059769815]}/>
                    </Suspense>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-5 pt-16'>
                <Link 
                    href='/privacy-policy' 
                    className='text-white text-sm hover:underline'
                    aria-label='Перейти до Політики конфіденційності'>
                        Політика конфіденційності
                </Link>
                <p className='text-white text-sm'>© 2025 GasMaster. Всі права захищені.</p>
            </div>
        </Container>
    </footer>
  );
};

export default Footer;