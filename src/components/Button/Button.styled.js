import styled from 'styled-components';

const StyledButton = styled.button`
  margin: 25px 0 0 0;
  width: 100%;
  max-width: 500px;
  height: 40px;
  /* color: #000; */
  font-size: 1.6rem;
  font-weight: 600;
  background-color: #dde1e7;
  border: none;
  outline: none;
  cursor: pointer;
  border: 1px solid #dde1e7;
  border-radius: 5px;
  box-shadow: 2px 2px 5px #cccfdb, -5px -5px 15px #ffffff73;
  color: #69beff;

  :focus {
    color: #3498db;
    box-shadow: inset 2px 2px 8px #babecc, inset -5px -5px 15px #ffffff73;
  }
`;

export { StyledButton };
