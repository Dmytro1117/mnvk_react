import styled from 'styled-components';
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
