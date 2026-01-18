import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { StyledAntButton } from './IconButton.styled';

export const IconButton = ({ direction = 'left', disabled = false, onClick }) => {
  return (
    <StyledAntButton
      shape="circle"
      disabled={disabled}
      onClick={onClick}
      icon={direction === 'left' ? <LeftOutlined /> : <RightOutlined />}
      aria-label={direction === 'left' ? 'Попереднє фото' : 'Наступне фото'}
    />
  );
};
