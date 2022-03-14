import styled, { css } from 'styled-components';

const StyledInputCheckboxError = styled.p`
  font-size: 1.3rem;
  color: #ff3333;
  visibility: hidden;

  ${(props) =>
    props.dataPermission === true &&
    css`
      visibility: visible;
    `}
`;

export { StyledInputCheckboxError };
