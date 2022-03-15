import styled, { css } from 'styled-components';

const StyledInputTextError = styled.p`
  color: #ff3333;
  font-size: 1.3rem;
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
  ${(props) =>
    props.phoneError === true &&
    css`
      visibility: visible;
    `};
`;

export { StyledInputTextError };
