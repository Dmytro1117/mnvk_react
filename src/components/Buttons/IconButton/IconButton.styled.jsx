import styled from 'styled-components';
import { Button } from 'antd';

export const StyledAntButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px !important;
  height: 60px !important;
  border: none !important;
  background: transparent !important;
  box-shadow: none !important;

  .anticon {
    font-size: 32px !important;
    color: #3a97e8;
    transition:
      color 0.3s,
      transform 0.3s;
  }

  &:hover:not(:disabled) .anticon {
    color: #40a9ff;
    transform: scale(1.25);
  }

  &:disabled {
    opacity: 0.25 !important;
    cursor: not-allowed !important;

    .anticon {
      color: #bfbfbf !important;
    }
  }
  &:active:not(:disabled) .anticon {
    transform: scale(0.9);
  }
`;
