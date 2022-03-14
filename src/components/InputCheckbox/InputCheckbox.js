import { useEffect } from 'react';
import { StyledInputCheckbox } from './InputCheckbox.styled';

const InputCheckbox = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <StyledInputCheckbox type={props.type} onChange={props.checkboxHandler}>
      {props.children}
    </StyledInputCheckbox>
  );
};

export default InputCheckbox;
