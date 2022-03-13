import { useEffect } from 'react';
import { StyledInputText } from './InputText.styled';

const InputText = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <StyledInputText placeholder={props.placeholder}>
      {props.children}
    </StyledInputText>
  );
};

export default InputText;
