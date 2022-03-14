import { StyledInputTextError } from './InputTextError.styled';

const InputTextError = (props) => {
  return (
    <StyledInputTextError
      firstNameError={props.firstNameError}
      lastNameError={props.lastNameError}
      emailError={props.emailError}
    >
      {props.children}
    </StyledInputTextError>
  );
};

export default InputTextError;
