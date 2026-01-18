import { StyledAddBtn } from './AddButton.styled';

export const AddButton = ({ onClick, children, disabled = false, type = 'button', ...props }) => {
  return (
    <StyledAddBtn onClick={onClick} disabled={disabled} type={type} {...props}>
      {children}
    </StyledAddBtn>
  );
};
