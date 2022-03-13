import { useState } from 'react';
import { StyledQuestionnaire } from './Questionnaire.styled';
import ProgressBarContainer from '../ProgressBar/ProgressBarContainer';
import ProgressBar from '../ProgressBar/ProgressBar';
import Form from '../Form/Form';
import InputText from '../InputText/InputText';
import InputCheckbox from '../InputCheckbox/InputCheckbox';
import InputCheckboxLabel from '../InputCheckboxLabel/InputCheckboxLabel';

function Questionnaire() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const goNextPage = () => {
    setPage((page) => page + 1);
  };
  const goFirstPage = () => {
    setPage(1);
  };

  const goSubmit = (e) => {
    e.preventDefault();
    console.log('test');
    setPage((page) => page + 1);
  };

  function FirstPageContent() {
    return (
      <div>
        <h5>First Page</h5>
        <button onClick={goNextPage}>Start</button>
      </div>
    );
  }

  function LastPageContent() {
    return (
      <div>
        <h5>Third Page</h5>
        <button onClick={goFirstPage}>Start again</button>
      </div>
    );
  }

  return (
    <StyledQuestionnaire>
      <ProgressBarContainer>
        <ProgressBar max='3' value={page} />
      </ProgressBarContainer>
      {page === 1 && <FirstPageContent />}
      {page === 2 && (
        <Form>
          <InputText name='firstName' type='text' placeholder='first name' />
          <InputText name='lastName' type='text' placeholder='last name' />
          <InputText name='email' type='text' placeholder='email' />
          <InputCheckboxLabel>
            <InputCheckbox type='checkbox' />
            Text
          </InputCheckboxLabel>
          <button type='submit' onClick={goSubmit}>
            Submit
          </button>
        </Form>
      )}
      {page === 3 && <LastPageContent />}
    </StyledQuestionnaire>
  );
}

export default Questionnaire;
