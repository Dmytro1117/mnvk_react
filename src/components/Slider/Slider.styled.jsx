import styled from 'styled-components';

export const SliderSection = styled.section`
  padding: 40px 0;
  width: 100%;
`;

export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 520px;
  gap: 15px;
  padding: 0 60px;

  @media (max-width: 768px) {
    padding: 0;
    height: 450px;
  }
`;

export const SlidesWindow = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 15px;
`;

export const SlideItem = styled.div`
  position: relative;
  flex: ${props => (props.$active ? '2.2' : '1')};
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  will-change: flex;
  transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  box-shadow: ${props => (props.$active ? '0 15px 30px rgba(58, 151, 232, 0.15)' : '0 8px 20px rgba(0, 0, 0, 0.08)')};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center ${props => (props.$active ? '10%' : '20%')};
    transition: all 0.7s cubic-bezier(0.25, 1, 0.5, 1);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 50%, transparent 100%);
    opacity: ${props => (props.$active ? 1 : 0.4)};
    transition: opacity 0.7s ease;
    z-index: 1;
  }

  @media (max-width: 768px) {
    flex: ${props => (props.$active ? '10' : '1')};
  }
`;

export const SlideInfo = styled.div`
  position: absolute;
  left: 30px;
  bottom: 30px;
  right: 30px;
  z-index: 2;
  opacity: ${props => (props.$active ? 1 : 0)};
  transform: translateY(${props => (props.$active ? '0' : '30px')});
  transition: all 0.5s 0.3s ease;
`;

export const Label = styled.div`
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #3a97e8;
  margin-bottom: 8px;
  font-weight: 700;
`;

export const SlideTitle = styled.div`
  font-size: 24px;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.2;
`;

export const ActionWrapper = styled.div`
  z-index: 10;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => (props.$side === 'left' ? 'left: 0;' : 'right: 0;')};

  @media (max-width: 768px) {
    display: none;
  }
`;
