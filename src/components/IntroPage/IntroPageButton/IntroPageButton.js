import { StyledIntroPageButton } from './IntroPageButton.styled';

const Button = (props) => {
  return (
    <StyledIntroPageButton onClick={props.goNextPage}>
      {props.children}
    </StyledIntroPageButton>
  );
};

export default Button;
