import { useEffect } from 'react';
import { StyledProgressBarContainer } from './ProgressBarContainer.styled';

const ProgressBarContainer = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <StyledProgressBarContainer>{props.children}</StyledProgressBarContainer>
  );
};

export default ProgressBarContainer;
