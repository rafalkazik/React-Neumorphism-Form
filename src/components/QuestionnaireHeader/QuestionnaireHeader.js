import { StyledQuestionnaireHeader } from './QuestionnaireHeader.styled';

const QuestionnaireHeader = (props) => {
  return (
    <StyledQuestionnaireHeader>{props.children}</StyledQuestionnaireHeader>
  );
};

export default QuestionnaireHeader;
