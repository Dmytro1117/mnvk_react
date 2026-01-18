import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

export const Input = styled.input`
  width: 400px;
  margin-bottom: 22px;
  font-size: 18px;
  padding: 8px 16px;
  border: none;
  border-bottom: 1px solid rgba(104, 105, 107, 0.877);
  display: block;

  &:hover,
  &:focus {
    outline: none;
    border: none;
    border-bottom: 1px solid rgba(19, 116, 206, 0.781);
  }
`;

export const But = styled(Button)`
  border-radius: 2px;
  display: block;
  font-size: 18px;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
`;

export const ButWrapper = styled.div`
  display: flex; 
  justify-content: center; 
  margin-top: 20px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 480px;
  padding: 40px;
  background: #ffffff;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  margin: 0 auto;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: color: #1374ce;
  margin-bottom: 32px;
  letter-spacing: -0.5px;
`;

export const HelperText = styled.p`
  margin-top: 15px;
  text-align: center;
  color: #666;
  font-size: 14px;
`;

export const AccentLink = styled(Link)`
  color: #1890ff; /* Колір вашої теми */
  font-weight: 600;
  margin-left: 5px;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #40a9ff;
    text-decoration: underline;
  }
`;