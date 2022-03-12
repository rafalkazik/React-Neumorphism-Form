import { useEffect } from 'react';
import { StyledProgressBar } from './ProgressBar.styled';

const ProgressBar = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <StyledProgressBar max={props.max} value={props.value}>
      {props.children}
    </StyledProgressBar>
  );
};

export default ProgressBar;
