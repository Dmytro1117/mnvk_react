import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

export const Content = styled.main`
  flex: 1;
  width: 100%;
  margin: 0 auto;
  padding-top: 120px;

  @media (max-width: 768px) {
    padding-top: 100px;
  }
`;
