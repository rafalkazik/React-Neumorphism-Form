import { useEffect } from 'react';
import { StyledInputCheckboxLabel } from './InputCheckboxLabel.styled';

const InputCheckboxLabel = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);

  return <StyledInputCheckboxLabel>{props.children}</StyledInputCheckboxLabel>;
};

export default InputCheckboxLabel;
