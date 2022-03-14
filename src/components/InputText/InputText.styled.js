import styled, { css } from 'styled-components';

const StyledInputText = styled.input`
  height: 40px;
  width: 100%;
  max-width: 500px;
  padding: 1.5rem 0 1.5rem 1rem;
  font-size: 1.4rem;
  outline: none;
  border: none;
  color: #595959;
  background-color: #dde1e7;
  border-radius: 5px;
  margin: 1rem;
  box-shadow: inset 3px 3px 5px #cccfdb, inset -7px -7px 10px #ffffff73;

  ::placeholder {
    color: #969696;
  }
`;

export { StyledInputText };
