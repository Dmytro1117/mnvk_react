import styled from 'styled-components';

export const Section = styled.div`
  width: 1280px;
  padding: 32px 16px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const Img = styled.img`
  overflow: hidden;
  border-radius: 10px;
  width: 500px;
  height: 300px;
  margin-top: auto;
  margin-bottom: auto;
`;

export const Container = styled.div`
  max-width: 800px;
`;

export const Title = styled.h2`
  font-weight: 600;
  margin-bottom: 28px;
  font-size: 32px;
  line-height: 1.2;
  margin-top: 0;
  text-align: left;
  text-shadow: 2px 2px 4px #000000;
`;

export const Text = styled.p`
  width: 700px;
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 1.8;
  color: #64748b;
  font-weight: 400;
  text-align: justify;
  text-indent: 30px;
  line-height: 1.3;
`;
