import { StyledLastPageButton } from './LastPageButton.styled';

const LastPageButton = (props) => {
  return (
    <StyledLastPageButton onClick={props.goFirstPage}>
      {props.children}
    </StyledLastPageButton>
  );
};

export default LastPageButton;
