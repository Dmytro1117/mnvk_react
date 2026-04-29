import styled, { keyframes } from 'styled-components';
import hero from '../../images/hero.png';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Hero = styled.section`
  position: relative;
  width: 100%;

  height: 70vh;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: -120px;
  padding-top: 110px;

  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.1) 70%, rgba(255, 255, 255, 1) 100%), url(${hero});

  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    height: 55vh;
    margin-top: -100px;
    padding-top: 100px;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2; /* Поверх вуалі */
  max-width: 900px;
  padding: 40px 20px;
  text-align: center;
  animation: ${fadeInUp} 0.4s ease-out;

  background: rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  margin: 0 20px;
`;

export const Tex = styled.h1`
  margin: 0;
  color: #ffffff;
  font-weight: 800;
  font-size: clamp(28px, 6vw, 56px);
  line-height: 1.1;

  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  span {
    display: block;
    font-size: clamp(12px, 1.8vw, 16px);
    text-transform: uppercase;
    letter-spacing: 0.4em;
    color: #4db3ff;
    margin-bottom: 15px;
    font-weight: 600;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
