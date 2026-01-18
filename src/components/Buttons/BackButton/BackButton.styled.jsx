import styled from 'styled-components';

export const StyledBackBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: #ffffff;
  color: #64748b;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #f8fafc;
    color: #1e293b;
    border-color: #cbd5e1;
    transform: translateX(-4px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  svg {
    font-size: 12px;
  }
`;
