import styled, { css } from 'styled-components';

const StyledProgressBarContainer = styled.div`
  margin: 5rem 0;

  progress {
    appearance: none;
    border: 0;
    border-radius: 25px;
    height: 100%;
    margin-bottom: 3rem;
    width: 100%;
  }

  progress[value] {
    border: 0;
    border-radius: 25px;
  }

  progress[value]::-webkit-progress-bar {
    background-color: #dde1e7;
    border: 0;
    border-radius: 25px;
    box-shadow: inset 3px 3px 5px #cccfdb, inset -7px -7px 10px #ffffff73;
    height: 30px;
    max-width: 500px;
    padding: 0.7rem;
    width: 90vw;
  }

  progress[value]::-webkit-progress-value {
    background: rgb(104, 179, 244);
    background: linear-gradient(
      90deg,
      rgba(104, 179, 244, 1) 0%,
      rgba(85, 192, 201, 1) 100%
    );
    border: 0;
    border-radius: 25px;
  }
`;

export { StyledProgressBarContainer };
