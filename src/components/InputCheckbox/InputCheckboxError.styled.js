import styled, { css } from 'styled-components';

const StyledInputCheckboxError = styled.p`
  color: #ff3333;
  font-size: 1.3rem;
  visibility: hidden;

  ${(props) =>
    props.dataPermission === true &&
    css`
      visibility: visible;
    `}
`;

export { StyledInputCheckboxError };
