import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.h1`
  font-size: clamp(24px, 4vw, 42px);
  color: #1e293b;
  text-align: center;
  font-weight: 800;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const NavButton = styled(Link)`
  text-decoration: none;
  padding: 12px 24px;
  background: #ffffff;
  color: #3a97e8;
  border: 1px solid rgba(58, 151, 232, 0.3);
  border-radius: 14px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  &:hover {
    background: #3a97e8;
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 8px 15px rgba(58, 151, 232, 0.2);
  }
`;

export const Img = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  margin-top: 8px;
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  margin: 0 6px;
  color: white;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  border: 1px solid #1677ff;
  border-radius: 10px;
  box-shadow: 0 2px 0 rgb(5 145 255 / 10%);
  padding: 10px 20px;

  background-color: #1677ff;
  font-weight: 600;
  font-size: 16px;

  &:hover,
  &:focus {
    opacity: 0.8;
    background-color: white;
    color: #1677ff;
  }
`;
