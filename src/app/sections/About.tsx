'use client';

import Container from '../components/Container';
import Section from '../components/Section';
import Heading from '../components/Heding';
import Button from '../components/Button';
import { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const About = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
  return (
    <div className="bg-no-repeat bg-center bg-cover bg-[url('/images/injectors.webp')] ">
        <Section id='about-us'>
                <Container>
                    <Heading title='Про нас' subtitle='Точність та гарантія' v2={true} />
                    <div className={`text-white overflow-hidden mb-3 transition ${isOpen ? 'h-auto' : 'max-h-[70px]'}`}>
                        <p>Ми працюємо в галузі встановлення та обслуговування ГБО понад 10 років, допомагаючи водіям економити на пальному та дбати про екологію.</p>
                        <p>Наша команда складається з сертифікованих фахівців, які постійно підвищують свою кваліфікацію. Ми працюємо виключно з перевіреним обладнанням від провідних виробників.</p>
                        <p>За роки роботи ми встановили ГБО на понад 5000 автомобілів і заслужили довіру тисяч клієнтів у Львові та за його межами</p>
                        <p>Наша місія – зробити ГБО доступним, безпечним і економічно вигідним для кожного водія. Ми віримо в професіоналізм, чесність і індивідуальний підхід до кожного клієнта.</p>
                    </div>
                    <div className="flex justify-end">
                        <Button label={isOpen ? 'Приховати' : 'Дізнатись більше'} icon={ isOpen ? FaChevronUp : FaChevronDown} iconSize={18} small handleClick={() => setIsOpen(prev => !prev)}/>
                    </div>
                </Container>
        </Section>
    </div>
  );
};

export default About;