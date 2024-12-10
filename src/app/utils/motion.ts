import { Variants } from "framer-motion";

export type staggerContainerProps = {
    staggerChildren: number;
    delayChildren: number;
}

export const staggerContainer = ({ staggerChildren, delayChildren } : staggerContainerProps) : Variants => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delayChildren || 0,
        },
      },
    };
  };

export const textVariant = (delay?: string | number) : Variants => {
    return {
        hidden: {
            y: -50,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.25,
                delay: delay,
            } as any,
        },
    };
};

export type fadeInProps = {
    direction?: string;
    type?: string;
    delay?: string | number;
    duration?: string | number;
}

export const fadeIn = ({ direction = '', type = 'spring', delay = 0, duration = 1 } : fadeInProps) : Variants => {
    return {
        hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: "easeOut",
            } as any,
        },
    };
};