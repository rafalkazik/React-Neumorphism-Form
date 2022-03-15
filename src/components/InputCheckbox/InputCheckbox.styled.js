import styled from 'styled-components';

const StyledInputCheckbox = styled.input`
  left: -9999px;
  position: absolute;
  top: -9999px;

  &:checked + span {
    background-color: #1890ff;

    &:before {
      left: 27px;
    }
  }
`;

export { StyledInputCheckbox };
