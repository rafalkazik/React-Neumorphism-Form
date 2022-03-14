import { useEffect } from 'react';
import { StyledInputTextError } from './InputTextError.styled';

const InputTextError = (props) => {
  useEffect(() => {
    console.log(props.firstNameError);
    console.log(props.lastError);
    console.log(props.emailError);
  }, []);

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
