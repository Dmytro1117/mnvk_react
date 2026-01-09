import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { motion, useAnimation } from 'framer-motion';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import driver from '../../images/Professions/driver.png';
import web from '../../images/Professions/web.png';
import locksmith from '../../images/Professions/locksmith.png';
import psychologist from '../../images/Professions/psychologist.png';
import secretary from '../../images/Professions/secretary.png';
import cook from '../../images/Professions/cook.png';
import driverIco from '../../images/Professions/водій.png';
import webIco from '../../images/Professions/дизайнер.png';
import locksmithIco from '../../images/Professions/слюсар.png';
import psychologistIco from '../../images/Professions/психолог.png';
import secretaryIco from '../../images/Professions/секретар.png';
import cookIco from '../../images/Professions/кухар.png';
import {
  Section,
  Wrapper,
  InfoContainer,
  Text,
  Title,
  CanvasContainer,
  WrappContainer,
  Cont,
  Image,
  TextContainer,
  ProgTitle,
  Cont2,
  WrappContainer2,
  Overlay,
  Overlay2,
  ProfessionList,
  ProfessionItem,
  ProfessionImg,
  ProfessionText,
  NavLin,
} from './Professions.styled';

const Professions = () => {
  const controls = useAnimation();
  const isLoaggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('yourElementId');
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight) {
          controls.start({ opacity: 1, x: 0 });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  const variants = {
    hidden: { opacity: 0, x: -100 },
    hidden2: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Section>
      <Wrapper>
        <InfoContainer>
          <Title>Професії та профілі</Title>

          <Text>
            Вибір професії – це одна з важливих складових умов людського щастя, усвідомлення своєї корисності для людей
            або відчуття «маленької людини» - гвинтика, виконавця чужої долі. Основна проблема для молоді – це пошук
            свого місця в житті, що тісно пов’язано з обранням майбутньої професії. Вибір професії – це той
            відповідальний рубіж, на якому оцінка своїх індивідуальних особливостей і можливостей піддається ретельному
            оцінюванню. Питання профорієнтації завжди було у центрі уваги держави і суспільства. Тому профорієнтаційна
            підготовка молоді розподіляються між усіма ланками суспільства, відповідальними за її виховання, -
            загальноосвітніми та професійно-технічними навчальними закладами.
          </Text>

          <Text>
            Ми надаємо можливість опанувати сучасні технології, отримати актуальні знання та розвивати навички, які є
            важливими в сучасному ринку праці. Ви зможете не лише отримати необхідний досвід, але й розвинути свої
            таланти та знайти власний шлях до успіху у вибраній галузі.
          </Text>

          <ProfessionList>
            <ProfessionItem>
              <ProfessionImg src={driverIco} alt="Водій" />

              {isLoaggedIn ? (
                <NavLin to="/driver">
                  <ProfessionText>Водій автотранспортних засобів (категорії «В», «С»)</ProfessionText>
                </NavLin>
              ) : (
                <ProfessionText>Водій автотранспортних засобів (категорії «В», «С»)</ProfessionText>
              )}
            </ProfessionItem>
            <ProfessionItem>
              <ProfessionImg src={locksmithIco} alt="Слюсар" />

              {isLoaggedIn ? (
                <NavLin to="/locksmith">
                  <ProfessionText>Слюсар механоскладальних робіт</ProfessionText>
                </NavLin>
              ) : (
                <ProfessionText>Слюсар механоскладальних робіт</ProfessionText>
              )}
            </ProfessionItem>

            <ProfessionItem>
              <ProfessionImg src={secretaryIco} alt="Секретар" />

              {isLoaggedIn ? (
                <NavLin to="/secretary">
                  <ProfessionText>Секретар керівника (організації підприємства, установи)</ProfessionText>
                </NavLin>
              ) : (
                <ProfessionText>Секретар керівника (організації підприємства, установи)</ProfessionText>
              )}
            </ProfessionItem>
            <ProfessionItem>
              <ProfessionImg src={webIco} alt="Дизайн" />

              {isLoaggedIn ? (
                <NavLin to="/web">
                  <ProfessionText>Основи web-дизайну та web-програмування</ProfessionText>
                </NavLin>
              ) : (
                <ProfessionText>Основи web-дизайну та web-програмування</ProfessionText>
              )}
            </ProfessionItem>
            <ProfessionItem>
              <ProfessionImg src={cookIco} alt="Кухар" />

              {isLoaggedIn ? (
                <NavLin to="/cook">
                  <ProfessionText>Кухар</ProfessionText>
                </NavLin>
              ) : (
                <ProfessionText>Кухар</ProfessionText>
              )}
            </ProfessionItem>
            <ProfessionItem>
              <ProfessionImg src={psychologistIco} alt="Психолог" />

              {isLoaggedIn ? (
                <NavLin to="/psychologist">
                  <ProfessionText>Основи психологічних знань - система особистісного росту</ProfessionText>
                </NavLin>
              ) : (
                <ProfessionText>Основи психологічних знань - система особистісного росту</ProfessionText>
              )}
            </ProfessionItem>
          </ProfessionList>
        </InfoContainer>

        <CanvasContainer>
          <WrappContainer id="yourElementId">
            <motion.div initial="hidden" animate={controls} variants={variants} transition={{ duration: 1.2 }}>
              <Cont>
                <Image src={driver} alt="Profession" />

                <TextContainer>
                  <ProgTitle>Водій</ProgTitle>
                </TextContainer>
                <Overlay>
                  У нас ви навчитесь вміло керувати транспортними засобами відповідних категорій та дізнаєтесь про
                  правила дорожнього руху.
                </Overlay>
              </Cont>

              <Cont>
                <Image src={locksmith} alt="Profession" />

                <TextContainer>
                  <ProgTitle>Слюсар</ProgTitle>
                </TextContainer>
                <Overlay>
                  У нас ви навчитесь здійснювати збирання машин і механізмів з деталей,а також займатися ремонтом
                  механоскладних пристроїв.
                </Overlay>
              </Cont>
              <Cont>
                <Image src={secretary} alt="Profession" />

                <TextContainer>
                  <ProgTitle>Секретар</ProgTitle>
                </TextContainer>
                <Overlay>
                  Ви навчитесь працювати з сучасними засобами для роботи секретарів, працювати з цінними паперами та
                  дізнаєтесь про основні функції секретаря.
                </Overlay>
              </Cont>
            </motion.div>
          </WrappContainer>

          <WrappContainer2>
            <motion.div initial="hidden2" animate={controls} variants={variants} transition={{ duration: 1.2 }}>
              <Cont2>
                <Image src={web} alt="Profession" />

                <TextContainer>
                  <ProgTitle>Web-дизайнер</ProgTitle>
                </TextContainer>
                <Overlay2>
                  Ви навчитеся створювати стильні дизайни сайтів, розробляти яскраві дизайнерські рішення для
                  поліграфічної продукції та вміло програмувати на сучасних мовах програмування.
                </Overlay2>
              </Cont2>

              <Cont2>
                <Image src={psychologist} alt="Profession" />

                <TextContainer>
                  <ProgTitle>Психолог</ProgTitle>
                </TextContainer>
                <Overlay2>
                  Програма акумулює в собі найважливіші знання психологічних наук, які призвані не тільки вплинути на
                  свідомий вибір професії, а й допомогти будувати власний життєвий шлях, кар'єру, сім'ю.
                </Overlay2>
              </Cont2>
              <Cont2>
                <Image src={cook} alt="Profession" />

                <TextContainer>
                  <ProgTitle>Кухар</ProgTitle>
                </TextContainer>
                <Overlay2>
                  Бажаєте навчитися створювати кулінарні шедеври із примітивних наборів продуктів? Ми вам розкажемо та
                  продемонструємо як правильно куховарити та розкриємо таємниці цієї професії.
                </Overlay2>
              </Cont2>
            </motion.div>
          </WrappContainer2>
        </CanvasContainer>
      </Wrapper>
    </Section>
  );
};

export default Professions;
