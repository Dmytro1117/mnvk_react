import styled from 'styled-components';

export const Footerr = styled.footer`
  background-color: #1a1b22;
  border-top: 1px solid rgba(58, 151, 232, 0.3);
  color: #e5e7eb;
  padding: 40px 0 20px;
  width: 100%;
  margin-top: auto;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const Adress = styled.address`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-style: normal;
`;

export const FooterAdress = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #9ca3af;
  text-decoration: none;
  font-size: 15px;
  transition: all 0.3s ease;

  &:hover {
    color: #3a97e8;
    transform: translateX(5px);
  }
`;

export const CopyrightRow = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Tex = styled.p`
  font-size: 13px;
  color: #6b7280;
  margin: 0;
`;

export const FooterInfo = styled.div`
  max-width: 300px;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const FooterLogo = styled.h3`
  color: #3a97e8;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1px;
`;

export const FooterText = styled.p`
  font-size: 14px;
  color: #9ca3af;
  line-height: 1.6;
  margin: 0;
`;
