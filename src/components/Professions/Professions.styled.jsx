import styled from 'styled-components';

export const Section = styled.div`
  width: 1280px;
  padding: 32px 16px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoContainer = styled.div`
  width: 570px;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  text-align: justify;
  text-indent: 30px;
  font-size: 17px;
  line-height: 1.6;
  color: #64748b;
  margin-bottom: 24px;
`;

export const Title = styled.h2`
  font-weight: 600;
  margin-bottom: 28px;
  font-size: 32px;
  line-height: 1.2;
  margin-top: 0;
  text-align: right;
  text-shadow: 2px 2px 4px #000000;
`;

export const CanvasContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 620px;
  height: 1000px;
`;

export const WrappContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrappContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export const Image = styled.img`
  display: block;
  width: 288px;
  height: 288px;
  border-radius: 50%;
  overflow: hidden;
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  background:
    linear-gradient(0.1deg, rgba(0, 0, 0, 0.8) 0%, rgba(156, 156, 156, 0) 90%),
    linear-gradient(180deg, rgba(255, 239, 246, 0.2) 100%, rgba(255, 239, 246, 0.3) 100%);
  border: 2px solid skyblue;
  border-radius: 50%;
  text-align: center;
  color: #ffffff;
  width: 288px;
  height: 288px;
`;

export const ProgTitle = styled.p`
  margin-bottom: 8px;
  font-family: 'Montserrat Alternates';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  padding-top: 220px;
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0;
  width: 288px;
  height: 288px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(33, 150, 243, 0.8);
  color: #ffffff;
  text-align: center;
  font-size: 16px;
  padding: 16px;
  box-sizing: border-box;
  transform: translateY(100%);
  transition: transform 250ms ease;
`;

export const Cont = styled.div`
  position: relative;
  margin-bottom: 40px;
  overflow: hidden;

  &:hover {
    ${Overlay} {
      transform: translateY(0);
      cursor: pointer;
    }
  }
`;

export const Overlay2 = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0;
  width: 288px;
  height: 288px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(238, 61, 179, 0.8);
  color: #ffffff;
  text-align: center;
  font-size: 16px;
  padding: 16px;
  box-sizing: border-box;
  transform: translateY(-100%);
  transition: transform 250ms ease;
`;

export const Cont2 = styled.div`
  position: relative;
  margin-bottom: 40px;
  overflow: hidden;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    ${Overlay2} {
      transform: translateY(0);
      cursor: pointer;
    }
  }
`;

export const ProfessionList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0;
  list-style: none;
`;

export const ProfessionItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 8px;
  background: #ffffff;
  border: 1px solid #f1f5f9;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: #3a97e8;
    background: rgba(58, 151, 232, 0.02);
    transform: translateX(6px);
  }
`;

export const ProfessionImgWrapper = styled.div`
  min-width: 52px;
  height: 52px;
  background: #f8fafc;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
  border: 1px solid transparent;

  ${ProfessionItem}:hover & {
    background: rgba(58, 151, 232, 0.12);
    border-color: rgba(58, 151, 232, 0.3);
  }

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    filter: grayscale(10%) contrast(1.1);
  }
`;

export const ProfessionText = styled.p`
  font-size: 15px;
  line-height: 1.4;
  color: #475569;
  font-weight: 600;
  margin: 0;
  transition: all 0.3s ease;

  ${ProfessionItem}:hover & {
    color: #3a97e8;
  }
`;
