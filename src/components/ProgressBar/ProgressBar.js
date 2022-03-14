import { StyledProgressBar } from './ProgressBar.styled';

const ProgressBar = (props) => {
  return (
    <StyledProgressBar max={props.max} value={props.value}>
      {props.children}
    </StyledProgressBar>
  );
};

export default ProgressBar;
