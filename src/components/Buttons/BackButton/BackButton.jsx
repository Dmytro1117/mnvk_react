import { useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { StyledBackBtn } from './BackButton.styled';

export const BackButton = ({ to, children = 'Назад' }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return (
    <StyledBackBtn onClick={handleClick} type="button">
      <ArrowLeftOutlined />
      {children}
    </StyledBackBtn>
  );
};
