'use client';

import React from 'react';
import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import { carouselImages } from '@/app/constants';
import { v4 as uuidv4 } from 'uuid';

const Slider = () => {
  return (
    <div>
      <Carousel
        opts={{
          loop: true
        }}>
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem
              key={`${index}-${uuidv4()}`}
              className="relative w-full h-[300px] md:basis-1/2 lg:basis-1/3 pl-1 md:pl-4"
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="object-cover pl-1 md:pl-4"
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious 
          className="bg-primary p-2 rounded-full shadow-md left-0 lg:-left-12" 
          aria-label="Previous Slide"
        />
        <CarouselNext 
          className="bg-primary p-2 rounded-full shadow-md right-0 lg:-right-12" 
            aria-label="Next Slide"
        />
      </Carousel>
    </div>
  );
};

export default Slider;
