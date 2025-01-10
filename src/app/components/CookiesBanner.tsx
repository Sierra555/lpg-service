'use client';

import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Modal from './Modal';
import { Button } from './ui/button';
import { fadeIn } from '../utils/motion';
import { motion } from 'framer-motion';
import { Link } from 'next-view-transitions';
import { cookiesConfig } from '../constants';
import { Switch } from "@/app/components/ui/switch";


const CookieBanner = () => {
  const [cookiesAccepted, setCookieAccepted] = useState(false);
  const [cookieSettings, setCookieSettings] = useState({
    general: true,
    marketing: false,
    functional: false,
    analytics: false,
  });

  type CookieSettings = {
    general: boolean;
    marketing: boolean;
    functional: boolean;
    analytics: boolean;
  };

  useEffect(() => {
    const consent = Cookies.get('cookie-consent');
    if (consent === 'accepted') {
        setCookieAccepted(true);
    }
  }, []);
  
  const handleAcceptAll = () => {
    const allAcceptedSettings = cookiesConfig.reduce(
        (settings, { id }) => ({ ...settings, [id]: true }),
        {} as CookieSettings
    );

    setCookieSettings(allAcceptedSettings);
    setCookieAccepted(true);

    Cookies.set('cookie-settings', JSON.stringify(allAcceptedSettings), { expires: 365, path: '/' });
    Cookies.set('cookie-consent', 'accepted', { expires: 365, path: '/' });
    // loadAnalyticsScripts();
  };

  const handleCookieToggle = (id: keyof CookieSettings) => {
    setCookieSettings((prevSettings) => ({
      ...prevSettings,
      [id]: !prevSettings[id],
    }));
  };

  const handleCookiesConfig = () => {
    Cookies.set('cookie-settings', JSON.stringify(cookieSettings), { expires: 365, path: '/' });
    Cookies.set('cookie-consent', 'accepted', { expires: 365, path: '/' });
    setCookieAccepted(true);
  }

//   const loadAnalyticsScripts = () => {
//     // Завантаження скриптів (наприклад, Google Analytics)
//     const script = document.createElement('script');
//     script.src = `https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXX-X`;
//     script.async = true;
//     document.head.appendChild(script);

//     script.onload = () => {
//       window.dataLayer = window.dataLayer || [];
//       function gtag() {
//         window.dataLayer.push(arguments);
//       }
//       gtag('js', new Date());
//       gtag('config', 'UA-XXXXXXX-X');
//     };
//   };

const content = <div>
    {cookiesConfig.map(({title, descr, id}) => (
        <section key={id} className='relative border-b-[1px] py-3 pr-[70px]'>
            <h3>{title}</h3>
            <p className='text-xs mt-3'>{descr}</p>
            <Switch 
                value={id}
                checked={cookieSettings[id]}
                onClick={() => handleCookieToggle(id)}
                className='absolute top-3 right-0'
                disabled={id === 'general'}
            />
        </section>
    ))}
    <div className='flex justify-end mt-3'>
        <Button onClick={handleCookiesConfig}>Зберегти</Button>
    </div>
</div>

  return (
    <>
    {!cookiesAccepted && ( 
        <motion.div 
            className='fixed z-10 bottom-0 left-0 w-full md:w-[30vw] bg-background grid gap-3 p-3 shadow-sm border-t-[1px] border-gray'
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: .1 }}
            variants={fadeIn({ direction: 'up', type: 'ease-in-out', delay: 0, duration: .5 })}
        >
            <p className='col-span-2'>🍪 Цей сайт використовує cookie для покращення роботи. Приймаючи, ви погоджуєтесь на використання нами таких файлів cookie.</p>
            <Link 
                href='/privacy-policy' 
                className='col-span-2 text-sm underline'
                aria-label='Перейти до Політики конфіденційності'>
                    Політика конфіденційності
            </Link>
            <Button onClick={handleAcceptAll}>Прийняти всі</Button>
            <Modal 
              title='Налаштування cookies' 
              trigger={<Button variant='outline'>Налаштувати</Button>}
              content={content}
            />
      </motion.div>)}
    </>
  );
};

export default CookieBanner;
