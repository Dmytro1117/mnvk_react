import styled from 'styled-components';

export const DivFlexbox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 15px;
    align-items: stretch;
  }
`;

export const Container = styled.div`
  width: 1280px;
  padding: 32px 16px;
  margin: 0 auto;
`;
