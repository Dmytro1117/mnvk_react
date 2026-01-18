import styled from 'styled-components';

export const StyledDeleteButton = styled.button`
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    background 0.2s,
    transform 0.1s;

  ${props =>
    props.$absolute &&
    `
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;
  `}

  &:hover {
    background-color: #3a97e8;
    color: #ffffff;
    box-shadow: 0 4px 12px rgba(58, 151, 232, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }
`;
