'use client';

import { benefits } from '@/app/constants';
import Container from '../components/Container';
import Section from '../components/Section';
import Heading from '../components/Heding';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

type Benefit = {
  title: string,
  description?: string
}

const Benefits = () => {
  return (
    <Section id='benefits'>
        <Container> 
          <Heading title='Переваги ГБО' subtitle='Вигідно для вас та вашого автомобіля'/>
          <div className="xl:flex xl:justify-between">
            <dl className='xl:max-w-[30vw] p-3 md:text-lg text-md'>
                {benefits.map(({ title, description }: Benefit, index: number) => (
                <div key={`${index}-${uuidv4()}`} className='mb-3'>
                    <dt className="
                    text-primary
                    relative 
                    mb-2
                    pl-5 
                    before:absolute 
                    before:left-0 
                    before:top-1/2 
                    before:transform 
                    before:-translate-y-1/2 
                    before:w-2 
                    before:h-2 
                    before:bg-primary 
                    before:rounded-full">
                        {title}
                    </dt>
                    <dd className='pl-5'>{description}</dd>
                </div>
                ))}
              </dl>
              <div className='relative xl:w-full xl:max-w-[600px] hidden xl:block xl:h-auto'>
                <Image 
                  src='/images/injectors-v2.webp'
                  alt='Форсунки'
                  fill
                  sizes="(min-width: 1280px) 50vw"
                />
              </div>
          </div>
      </Container>    
    </Section>
  );
};

export default Benefits;

