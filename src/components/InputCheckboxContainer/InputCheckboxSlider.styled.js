import styled from 'styled-components';

const StyledInputCheckboxSlider = styled.span`
  background-color: #bfbfbf;
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  height: 25px;
  margin-right: 4rem;
  max-width: 50px;
  position: relative;
  transition: background-color 0.3s;
  width: 100%;

  &:before {
    background-color: #ffffff;
    border-radius: 45px;
    box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
    content: '';
    height: 21px;
    left: 2px;
    position: absolute;
    top: 2px;
    transition: 0.2s;
    width: 21px;
  }
`;

export { StyledInputCheckboxSlider };
