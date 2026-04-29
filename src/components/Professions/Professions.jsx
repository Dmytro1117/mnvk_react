import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {
  Section,
  Wrapper,
  InfoContainer,
  Text,
  Title,
  CanvasContainer,
  WrappContainer,
  WrappContainer2,
  Image,
  TextContainer,
  ProgTitle,
  Overlay,
  Overlay2,
  ProfessionImgWrapper,
  ProfessionList,
  ProfessionItem,
  ProfessionText,
  Cont,
  Cont2,
} from './Professions.styled';

const Professions = () => {
  const controls = useAnimation();

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
            таланти та знайти власний шлях до успіху у вибраній галузі.закладами.
          </Text>

          <ProfessionList>
            <ProfessionItem>
              <ProfessionImgWrapper>
                <img
                  src={
                    'https://res.cloudinary.com/dpvqbbgkd/image/upload/v1777449846/MNVK/logo/%D0%B2%D0%BE%D0%B4%D1%96%D0%B9_epyi5d.png'
                  }
                  alt="Водій"
                />
              </ProfessionImgWrapper>
              <ProfessionText>Водій автотранспортних засобів (кат. «В», «С»)</ProfessionText>
            </ProfessionItem>

            <ProfessionItem>
              <ProfessionImgWrapper>
                <img
                  src={
                    'https://res.cloudinary.com/dpvqbbgkd/image/upload/v1777449852/MNVK/logo/%D1%81%D0%BB%D1%8E%D1%81%D0%B0%D1%80_c6fdbu.png'
                  }
                  alt="Слюсар"
                />
              </ProfessionImgWrapper>
              <ProfessionText>Слюсар механоскладальних робіт</ProfessionText>
            </ProfessionItem>

            <ProfessionItem>
              <ProfessionImgWrapper>
                <img
                  src={
                    'https://res.cloudinary.com/dpvqbbgkd/image/upload/v1777449850/MNVK/logo/%D1%81%D0%B5%D0%BA%D1%80%D0%B5%D1%82%D0%B0%D1%80_woxue7.png'
                  }
                  alt="Секретар"
                />
              </ProfessionImgWrapper>
              <ProfessionText>Секретар керівника організації</ProfessionText>
            </ProfessionItem>

            <ProfessionItem>
              <ProfessionImgWrapper>
                <img
                  src={
                    'https://res.cloudinary.com/dpvqbbgkd/image/upload/v1777449847/MNVK/logo/%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%D0%B5%D1%80_ncqxjq.png'
                  }
                  alt="Дизайн"
                />
              </ProfessionImgWrapper>
              <ProfessionText>Основи Web-дизайну та програмування</ProfessionText>
            </ProfessionItem>

            <ProfessionItem>
              <ProfessionImgWrapper>
                <img
                  src={
                    'https://res.cloudinary.com/dpvqbbgkd/image/upload/v1777449848/MNVK/logo/%D0%BA%D1%83%D1%85%D0%B0%D1%80_vbsoei.png'
                  }
                  alt="Кухар"
                />
              </ProfessionImgWrapper>
              <ProfessionText>Кухар 3-го розряду</ProfessionText>
            </ProfessionItem>

            <ProfessionItem>
              <ProfessionImgWrapper>
                <img
                  src={
                    'https://res.cloudinary.com/dpvqbbgkd/image/upload/v1777449849/MNVK/logo/%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3_a6ypam.png'
                  }
                  alt="Психолог"
                />
              </ProfessionImgWrapper>
              <ProfessionText>Психологія та особистісний ріст</ProfessionText>
            </ProfessionItem>
          </ProfessionList>
        </InfoContainer>

        <CanvasContainer>
          <WrappContainer id="yourElementId">
            <motion.div initial="hidden" animate={controls} variants={variants} transition={{ duration: 1.2 }}>
              <Cont>
                <Image
                  src={
                    'https://res.cloudinary.com/dpvqbbgkd/image/upload/v1777452433/MNVK/professions/poster/driver_xf0w3x.png'
                  }
                  alt="Profession"
                />

                <TextContainer>
                  <ProgTitle>Водій</ProgTitle>
                </TextContainer>
                <Overlay>
                  У нас ви навчитесь вміло керувати транспортними засобами відповідних категорій та дізнаєтесь про
                  правила дорожнього руху.
                </Overlay>
              </Cont>

              <Cont>
                <Image
                  src={
                    'https://res.cloudinary.com/dpvqbbgkd/image/upload/v1777452435/MNVK/professions/poster/locksmith_x5pkdy.png'
                  }
                  alt="Profession"
                />

                <TextContainer>
                  <ProgTitle>Слюсар</ProgTitle>
                </TextContainer>
                <Overlay>
                  У нас ви навчитесь здійснювати збирання машин і механізмів з деталей,а також займатися ремонтом
                  механоскладних пристроїв.
                </Overlay>
              </Cont>
              <Cont>
                <Image
                  src={
                    'https://res.cloudinary.com/dpvqbbgkd/image/upload/v1777452398/MNVK/professions/poster/ewu1ztl1cko93zpny05i_ndhs5q.png'
                  }
                  alt="Profession"
                />

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
                <Image
                  src={
                    'https://res.cloudinary.com/dpvqbbgkd/image/upload/v1777452401/MNVK/professions/poster/slw4u2waub6ktog6ffyt_rcxxuk.png'
                  }
                  alt="Profession"
                />

                <TextContainer>
                  <ProgTitle>Web-дизайнер</ProgTitle>
                </TextContainer>
                <Overlay2>
                  Ви навчитеся створювати стильні дизайни сайтів, розробляти яскраві дизайнерські рішення для
                  поліграфічної продукції та вміло програмувати на сучасних мовах програмування.
                </Overlay2>
              </Cont2>

              <Cont2>
                <Image
                  src={
                    'https://res.cloudinary.com/dpvqbbgkd/image/upload/v1777452759/MNVK/professions/poster/%D0%91%D0%B5%D0%B7_%D1%96%D0%BC%D0%B5%D0%BD%D1%96_lgspz6.png'
                  }
                  alt="Profession"
                />

                <TextContainer>
                  <ProgTitle>Психолог</ProgTitle>
                </TextContainer>
                <Overlay2>
                  Програма акумулює в собі найважливіші знання психологічних наук, які призвані не тільки вплинути на
                  свідомий вибір професії, а й допомогти будувати власний життєвий шлях, кар'єру, сім'ю.
                </Overlay2>
              </Cont2>
              <Cont2>
                <Image
                  src={
                    'https://res.cloudinary.com/dpvqbbgkd/image/upload/v1777452432/MNVK/professions/poster/cook_t1majc.png'
                  }
                  alt="Profession"
                />

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
