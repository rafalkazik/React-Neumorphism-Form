import { StyledInputCheckboxError } from './InputCheckboxError.styled';

const InputCheckboxError = (props) => {
  return (
    <StyledInputCheckboxError dataPermission={props.dataPermission}>
      {props.children}
    </StyledInputCheckboxError>
  );
};

export default InputCheckboxError;
