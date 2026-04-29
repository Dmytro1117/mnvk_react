import styled from 'styled-components';

export const Section = styled.div`
  width: 1280px;
  padding: 32px 16px;
  margin: 0 auto;
  justify-content: center;
`;

export const TeacherTitle = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 28px;
  font-size: 32px;
  line-height: 1.2;
  margin-top: 0;
  text-shadow: 2px 2px 4px #000000;
`;

export const Paragraf = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 1.8;
  color: #64748b;
  font-weight: 400;
  text-align: justify;
  text-align: center;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 60px;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StatItem = styled.div`
  position: relative;
  padding: 30px 20px;
  background: #ffffff;
  border: 1px solid #f1f5f9;
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #3a97e8, #60a5fa);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  span {
    display: block;
    font-size: 36px;
    font-weight: 900;
    color: #1e293b;
    margin-bottom: 8px;
    transition: color 0.3s ease;
  }

  p {
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #64748b;
    font-weight: 700;
    margin: 0;
  }

  &:hover {
    box-shadow:
      0 20px 25px -5px rgba(58, 151, 232, 0.1),
      0 8px 10px -6px rgba(0, 0, 0, 0.05);
    border-color: #3a97e8;

    &::before {
      opacity: 1;
    }

    span {
      color: #3a97e8;
    }
  }
`;
