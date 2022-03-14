import styled, { css } from 'styled-components';

const StyledInputTextError = styled.p`
  font-size: 1.3rem;
  color: #ff3333;
  visibility: hidden;

  ${(props) =>
    props.firstNameError === true &&
    css`
      visibility: visible;
    `}
  ${(props) =>
    props.lastNameError === true &&
    css`
      visibility: visible;
    `}
    ${(props) =>
    props.emailError === true &&
    css`
      visibility: visible;
    `};
`;

export { StyledInputTextError };
