import { Container, Text } from '../../components/AboutUs/AboutUs.styled';
import { Section, VideoTitle, VideoFile } from './Vdeo.styled';

const Video = () => {
  const video =
    'https://res.cloudinary.com/dpvqbbgkd/video/upload/v1777450578/MNVK/about/presentation_mmnvk_o6nbgp.mp4';

  return (
    <Section>
      <Container>
        <VideoTitle>Відео-презентація</VideoTitle>
        <Text>
          МНВК – це перша сходинка до дорослого самостійного життя та вибору професії. КУ «Міський міжшкільний
          навчально-виробничий комбінат» СМР – це навчальний заклад, який забезпечує потреби учнів загальноосвітніх шкіл
          міста Суми у допрофесійній: «Основи Web-дизайну та Web-програмування», «Гувернер», «Слюсар механоскладальних
          робіт» та професійній підготовці за професіями: «Водій автотранспортних засобів категорій «В», «С»», «Секретар
          керівника (підприємства, установи, організації)», «Кухар».
        </Text>
      </Container>

      <VideoFile
        src={video}
        poster="https://res.cloudinary.com/dpvqbbgkd/image/upload/v1777461586/MNVK/about/hero_upxeyx.png"
        controls
        preload="metadata"
        playsInline
      ></VideoFile>
    </Section>
  );
};

export default Video;
