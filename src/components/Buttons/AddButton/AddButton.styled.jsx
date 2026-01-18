import styled from 'styled-components';

export const StyledAddBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background-color: transparent;
  color: #3a97e8;
  border: 1px solid #3a97e8;
  border-radius: 10px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #3a97e8;
    color: #ffffff;
    box-shadow: 0 4px 12px rgba(58, 151, 232, 0.3);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    filter: grayscale(1);
  }

  svg {
    font-size: 16px;
  }
`;
