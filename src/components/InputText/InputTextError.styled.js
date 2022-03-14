import styled, { css } from 'styled-components';

const StyledInputTextError = styled.p`
  display: none;

  ${(props) =>
    props.firstNameError === true &&
    css`
      display: block;
    `}
  ${(props) =>
    props.lastNameError === true &&
    css`
      display: block;
    `}
  ${(props) =>
    props.emailError === true &&
    css`
      display: block;
    `}
`;

export { StyledInputTextError };
