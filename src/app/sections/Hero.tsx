import React from 'react';
import Container from '../components/Container';

const Hero = () => {
  return (
    <section className="bg-cover bg-no-repeat bg-secondary bg-bottom bg-[url('/images/bg-main.webp')] h-screen ">
      <Container>
        <div className="pt-[228px]">
          <p className="title text-white before:bg-white">Швидко та якісно</p>
          <h1 className='text-[32px] md:text-[72px] font-semibold text-white'>Ремонт та діагностика ГБО у Львові: 
            <span className='text-primary'> Надійний сервіс для вашого авто</span>
          </h1>
        </div>
      </Container>
    </section>
  );
};

export default Hero;