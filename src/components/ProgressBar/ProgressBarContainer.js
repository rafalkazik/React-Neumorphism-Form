import { StyledProgressBarContainer } from './ProgressBarContainer.styled';

const ProgressBarContainer = (props) => {
  return (
    <StyledProgressBarContainer>{props.children}</StyledProgressBarContainer>
  );
};

export default ProgressBarContainer;
