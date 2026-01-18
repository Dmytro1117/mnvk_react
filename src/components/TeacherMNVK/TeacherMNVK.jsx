import { Slider } from '../Slider/Slider';
import { Section, TeacherTitle, Paragraf, StatsGrid, StatItem } from './TeacherMNVK.styled';

const sliderData = [
  {
    label: 'Директор',
    title: 'Химченко Оксана Петрівна',
    img: 'https://res.cloudinary.com/dpvqbbgkd/image/upload/v1768477504/MMNVK/%D0%A5%D0%B8%D0%BC%D1%87%D0%B5%D0%BD%D0%BA%D0%BE_nkb0kc.jpg',
  },
  {
    label: 'Заступник директора',
    title: 'Євдокименко Олександр Єгорович',
    img: 'https://res.cloudinary.com/dpvqbbgkd/image/upload/v1768477476/MMNVK/%D0%84%D0%B2%D0%B4%D0%BE%D0%BA%D0%B8%D0%BC%D0%B5%D0%BD%D0%BA%D0%BE_ncgpub.jpg',
  },
  {
    label: 'Методист',
    title: 'Котлярова Юлія Олексіївна',
    img: 'https://res.cloudinary.com/dpvqbbgkd/image/upload/v1768477477/MMNVK/%D0%9A%D0%BE%D1%82%D0%BB%D1%8F%D1%80%D0%BE%D0%B2%D0%B0_et61fd.jpg',
  },
  {
    label: 'Кухар',
    title: 'Крамаренко Лідія Сергіївна',
    img: 'https://res.cloudinary.com/dpvqbbgkd/image/upload/v1768477478/MMNVK/%D0%9A%D1%80%D0%B0%D0%BC%D0%B0%D1%80%D0%B5%D0%BD%D0%BA%D0%BE_ddsdfm.jpg',
  },
  {
    label: 'Водій автотранспортних засобів',
    title: 'Москаленко Олексій Петрович',
    img: 'https://res.cloudinary.com/dpvqbbgkd/image/upload/v1768477503/MMNVK/%D0%9C%D0%BE%D1%81%D0%BA%D0%B0%D0%BB%D0%B5%D0%BD%D0%BA%D0%BE_pxdymu.jpg',
  },
  {
    label: 'Основи web-дизайну',
    title: 'Єременко Галина Станіславівна',
    img: 'https://res.cloudinary.com/dpvqbbgkd/image/upload/v1768477477/MMNVK/%D0%84%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BA%D0%BE_hbx94z.jpg',
  },
];

export const TeacherMNVK = () => (
  <Section>
    <TeacherTitle>Колектив</TeacherTitle>
    <Paragraf>
      КУ"ММНВК"СМР укомплектований кваліфікованими педагогічними кадрами. У закладі працює 13 вчителів та майстрів
      виробничого навчання, вищу освіту мають 10 вчителів та майстрів виробничого навчання, середню спеціальну три
      майстри виробничого навчання. Вчителів вищої категорії – 2, першої категорії – 5, спеціалістів – 6.
    </Paragraf>
    <div className="content">
      <Slider data={sliderData} />
    </div>
    <StatsGrid>
      <StatItem>
        <span>13</span>
        <p>Педагогів</p>
      </StatItem>
      <StatItem>
        <span>10</span>
        <p>З вищою освітою</p>
      </StatItem>
      <StatItem>
        <span>2</span>
        <p>Вищої категорії</p>
      </StatItem>
      <StatItem>
        <span>5</span>
        <p>Першої категорії</p>
      </StatItem>
    </StatsGrid>
  </Section>
);
