import { StyledButton } from './Button.styled';

const Button = (props) => {
  return (
    <StyledButton type='submit' onClick={props.goSubmit}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
