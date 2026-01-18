import { StyledDeleteButton } from './DeleteButton.styled.jsx';

export const DeleteButton = ({
  onClick,
  children,
  disabled = false,
  type = 'button',
  isAbsolute = false,
  ...props
}) => {
  return (
    <StyledDeleteButton onClick={onClick} disabled={disabled} type={type} $absolute={isAbsolute} {...props}>
      {children}
    </StyledDeleteButton>
  );
};
