'use client';

import React, { useState, useEffect, useRef } from 'react';
import { services } from '@/app/constants';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import Modal from '../Modal';
import useClickOutside from '@/app/hooks/useClickOutside';
import { Link } from 'next-view-transitions';
import UserForm from '../Form';
import { Button } from '../ui/button';

type Service = {
  title: string;
  list?: string[];
  link?: string;
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  useClickOutside([dropdownRef, menuRef, modalRef], () => setDropdownOpen(false));
  useClickOutside([menuRef, modalRef], () => setMenuOpen(false));

  const handleClick = (index: number) => {
    setActiveItem(index);
    setMenuOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const activeSectionId = entry.target.id;
            const activeService = services.findIndex(service => service.link === `/#${activeSectionId}`);
            setActiveItem(activeService);
          }
        });
      },
      { threshold: 0.5 }
    );
    
    sections.forEach(section => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="flex flex-col md:flex-row justify-center" ref={menuRef}>
      <button
        className="md:hidden text-primary relative"
        onClick={toggleMenu}
        aria-label="Open menu"
      >
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={26} />}
      </button>

      <div 
        className={`${
          menuOpen ? 'block absolute left-0 top-20 w-full z-10' : 'hidden'
        } md:flex md:static gap-8 bg-gray-800 md:bg-transparent p-4 md:p-0`}
      >
        <ul className="flex flex-col gap-2 md:flex-row md:items-center md:gap-5">
          {services.map((item: Service, index: number) => (
            <li key={`${index}-${uuidv4()}`} className="relative group mb-2 md:mb-0">
              {item.list ? (
                <div key={index}>
                  <button
                    className={`flex items-center gap-1 hover:text-primary ${
                      activeItem === index ? 'text-primary' : ''
                    }`}
                    onClick={toggleDropdown}
                  >
                    {item.title}
                    <FaChevronDown
                      className={`transition-transform ${
                        dropdownOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </button>
                  {dropdownOpen && (
                    <ul ref={dropdownRef} className="bg-gray-700 text-white mt-2 p-3 rounded shadow-lg space-y-1 md:absolute md:top-10 md:left-0 md:w-[350px]">
                      {item.list.map((subItem: string, subIndex: number) => (
                        <li key={`${subIndex}-${uuidv4()}`}>
                          <Modal 
                            title='Залиште заявку' 
                            description='Ми зв&apos;яжемося з вами якнайшивдше.' 
                            trigger={<p className="hover:text-primary cursor-pointer transition">{subItem}</p>}
                            content={<UserForm service={subItem} />}
                            ref={modalRef}
                           />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  href={item.link as string}
                  onClick={() => handleClick(index)}
                  className={`hover:text-primary inline-block w-full ${
                    activeItem === index ? 'text-primary' : ''
                  }`}
                >
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <Modal 
          title='Залиште заявку' 
          description='Ми зв&apos;яжемося з вами якнайшивдше.' 
          trigger={<Button type='button' className='text-white w-full md:w-auto'>Записатися</Button>}
          content={<UserForm />}
          ref={modalRef}
         />
      </div>
    </nav>
  );
};

export default Navbar;
