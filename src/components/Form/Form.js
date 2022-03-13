import { useEffect } from 'react';
import { StyledForm } from './Form.styled';

const Form = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);

  return <StyledForm>{props.children}</StyledForm>;
};

export default Form;
