import { PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import {
  Footerr,
  Container,
  MainContent,
  Adress,
  FooterAdress,
  CopyrightRow,
  Tex,
  FooterInfo,
  FooterLogo,
  FooterText,
} from './Footer.styled';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Footerr>
      <Container>
        <MainContent>
          <FooterInfo>
            <FooterLogo>MMNVK</FooterLogo>
            <FooterText>Ваш шлях до професійного успіху та самореалізації починається тут.</FooterText>
          </FooterInfo>

          <Adress>
            <FooterAdress href="tel:+380542789732">
              <PhoneOutlined /> (0542) 78-97-32
            </FooterAdress>

            <FooterAdress href="tel:+380952580773">
              <PhoneOutlined /> +38 095 258 07 73
            </FooterAdress>

            <FooterAdress href="www.google.com" target="_blank" rel="noopener noreferrer">
              <EnvironmentOutlined /> м. Cуми
            </FooterAdress>
          </Adress>
        </MainContent>

        <CopyrightRow>
          <Tex>
            © {currentYear} <strong>MMNVK</strong>. Побудовано для майбутнього.
          </Tex>
        </CopyrightRow>
      </Container>
    </Footerr>
  );
};

export default Footer;
