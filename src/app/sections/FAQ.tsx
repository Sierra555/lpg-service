import Section from '../components/Section';
import Container from '../components/Container';
import Heading from '../components/Heding';
import AccordionComponent from '../components/Accordion';

const Faq = () => {
  return (
    <Section id='faq' >
        <Container>
            <Heading title='Часті запитання' />
            <AccordionComponent />
        </Container>
    </Section>
  );
};

export default Faq;