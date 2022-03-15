import styled from 'styled-components';

const StyledLastPageButton = styled.button`
  background-color: #dde1e7;
  border-radius: 5px;
  border: 1px solid #ebedf0;
  box-shadow: 2px 2px 5px #cccfdb, -5px -5px 15px #ffffff73;
  color: #69beff;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 600;
  height: 40px;
  letter-spacing: 0.05rem;
  margin: 25px 0 0 0;
  max-width: 500px;
  outline: none;
  text-transform: uppercase;
  transition: 0.3s linear;
  width: 100%;

  :active {
    box-shadow: inset 2px 2px 8px #babecc, inset -5px -5px 15px #ffffff73;
    color: #3498db;
  }

  :hover {
    color: #3498db;
  }
`;

export { StyledLastPageButton };
