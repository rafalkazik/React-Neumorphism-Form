import { useEffect } from 'react';
import { StyledInputCheckboxError } from './InputCheckboxError.styled';

const InputCheckboxError = (props) => {
  useEffect(() => {
    console.log(props.dataPermission);
  }, []);

  return (
    <StyledInputCheckboxError dataPermission={props.dataPermission}>
      {props.children}
    </StyledInputCheckboxError>
  );
};

export default InputCheckboxError;
