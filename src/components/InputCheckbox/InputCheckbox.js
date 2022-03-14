import { StyledInputCheckbox } from './InputCheckbox.styled';

const InputCheckbox = (props) => {
  return (
    <StyledInputCheckbox type={props.type} onChange={props.checkboxHandler}>
      {props.children}
    </StyledInputCheckbox>
  );
};

export default InputCheckbox;
