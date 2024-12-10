'use client';

import Link from 'next/link';
import { IconType } from 'react-icons';

type ButtonProps = {
    label?: string,
    link?: string,
    handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
    disabled?: boolean,
    outline?: boolean,
    small?: boolean,
    icon?: IconType,
    iconSize?: number
}
const Button = ({ label, link, handleClick, disabled, outline, small, icon: Icon, iconSize } : ButtonProps) => {
  return (
    <button
        onClick={handleClick}
        disabled={disabled}
        className={`relative disabled:opacity-70 disabled:cursos-not-allowed hover:opacity-80 transition w-full md:w-auto h-max	cursor-pointer flex justify-between items-center
                     ${outline ? 'bg-background border-foreground text-black hover:bg-gray-200' : 'bg-primary border-primary text-white'}
                      ${small ? 'px-3 py-2 text-sm font-light border-[1px] rounded-full' : 'text-lg font-semibold border-2 rounded-lg px-8 py-4'}`}
        >
            { link && label ? (
                <Link href={link}>{label}</Link>
            ) : (label) }

            { Icon && 
                <Icon 
                    size={iconSize}
                />
            }
    </button>
  );
};

export default Button;