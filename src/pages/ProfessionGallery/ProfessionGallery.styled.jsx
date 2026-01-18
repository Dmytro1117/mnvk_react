import styled from 'styled-components';

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px 0;
`;

export const PhotoWrapper = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  borderradius: 12px;
  cursor: pointer;

  &:hover img {
    transform: scale(1.05);
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

export const DeleteBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  opacity: 0.9;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;

export const UploadContainer = styled.div`
  position: relative;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const UploadLabel = styled.label`
  cursor: ${props => (props.$disabled ? 'not-allowed' : 'pointer')};
  display: inline-block;
`;
