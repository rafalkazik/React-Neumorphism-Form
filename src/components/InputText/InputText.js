import { StyledInputText } from './InputText.styled';

const InputText = (props) => {
  // const inputHandler = (e) => {
  //   console.log(`${props.name}: ${e.target.value}`);
  // };

  return (
    <StyledInputText placeholder={props.placeholder} onChange={props.value}>
      {props.children}
    </StyledInputText>
  );
};

export default InputText;
