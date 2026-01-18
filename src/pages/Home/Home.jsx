import AboutUs from '../../components/AboutUs/AboutUs';
import Professions from '../../components/Professions/Professions';
import Video from '../../components/Vdeo/Vdeo';
import { TeacherMNVK } from '../../components/TeacherMNVK/TeacherMNVK';
import { Tex, Container, Hero, HeroContent } from './Home.styled';

const Home = () => {
  return (
    <Container>
      <Hero>
        <HeroContent>
          <Tex>
            <span>Комунальна установа</span>
            Міський міжшкільний навчально-виробничий комбінат
          </Tex>
        </HeroContent>
      </Hero>

      <AboutUs />
      <Professions />
      <TeacherMNVK />
      <Video />
    </Container>
  );
};

export default Home;
