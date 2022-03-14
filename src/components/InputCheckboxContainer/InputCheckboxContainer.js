import { StyledInputCheckboxContainer } from './InputCheckboxContainer.styled';

const InputCheckboxContainer = (props) => {
  return (
    <StyledInputCheckboxContainer>
      {props.children}
    </StyledInputCheckboxContainer>
  );
};

export default InputCheckboxContainer;
