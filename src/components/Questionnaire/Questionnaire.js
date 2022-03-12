import { StyledQuestionnaire } from './Questionnaire.styled';
import ProgressBar from '../ProgressBar/ProgressBar';

function Questionnaire() {
  return (
    <StyledQuestionnaire>
      <ProgressBar max='4' value='2' />
      KWESTIONARIUSZ
    </StyledQuestionnaire>
  );
}

export default Questionnaire;
