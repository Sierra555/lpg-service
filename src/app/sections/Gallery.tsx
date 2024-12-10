import Heading from '../components/Heding';
import Section from '../components/Section';
import Container from '../components/Container';
import Slider from '../components/Slider';

const Gallery = () => {
  return (
    <Section id='works'>
        <Container>
            <Heading title='Наші роботи' />
            <Slider />
        </Container>
    </Section>
  );
};

export default Gallery;