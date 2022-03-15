import { StyledIntroPageButton } from './IntroPageButton.styled';

const IntroPageButton = (props) => {
  return (
    <StyledIntroPageButton onClick={props.goNextPage}>
      {props.children}
    </StyledIntroPageButton>
  );
};

export default IntroPageButton;
