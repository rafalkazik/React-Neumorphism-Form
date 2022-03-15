import { StyledInputText } from './InputText.styled';

const InputText = (props) => {
  return (
    <StyledInputText placeholder={props.placeholder} onChange={props.value}>
      {props.children}
    </StyledInputText>
  );
};

export default InputText;
