'use client';

import { RefObject, useEffect } from "react";

export default function useClickOutside(refs: RefObject<HTMLElement>[], handler: () => void) {
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent | TouchEvent) => {
            const isOutside = refs.every(ref => {
                const elem = ref.current;
                return !elem || !elem.contains(e.target as Node);
            });

            if (isOutside) {
                handler();
            }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);

    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('touchstart', handleClickOutside);
    }

    }, [refs, handler])
}