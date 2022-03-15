import styled from 'styled-components';

const StyledInputText = styled.input`
  background-color: #dde1e7;
  border-radius: 5px;
  border: none;
  box-shadow: inset 3px 3px 5px #cccfdb, inset -7px -7px 10px #ffffff73;
  color: #595959;
  font-size: 1.4rem;
  height: 40px;
  margin: 1rem;
  max-width: 500px;
  outline: none;
  padding: 1.5rem 0 1.5rem 1rem;
  width: 100%;

  ::placeholder {
    color: #969696;
  }
`;

export { StyledInputText };
