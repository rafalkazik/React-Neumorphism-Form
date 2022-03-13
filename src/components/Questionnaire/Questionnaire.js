import { useState } from 'react';
import { StyledQuestionnaire } from './Questionnaire.styled';
import ProgressBar from '../ProgressBar/ProgressBar';

function Questionnaire() {
  const [page, setPage] = useState(1);

  const goNextPage = () => {
    setPage((page) => page + 1);
  };
  const goPreviousPage = () => {
    setPage((page) => page + 1);
  };
  const goFirstPage = () => {
    setPage(1);
  };

  function FirstPageContent() {
    return (
      <div>
        <h5>First Page</h5>
        <button onClick={goNextPage}>Next</button>
      </div>
    );
  }
  function SecondPageContent() {
    return (
      <div>
        <h5>Second Page</h5>
        <button onClick={goPreviousPage}>Previous</button>
        <button onClick={goNextPage}>Next</button>
      </div>
    );
  }
  function ThirdPageContent() {
    return (
      <div>
        <h5>Third Page</h5>
        <button onClick={goPreviousPage}>Previous</button>
        <button onClick={goNextPage}>Next</button>
      </div>
    );
  }
  function FourthPageContent() {
    return (
      <div>
        <h5>Last Page</h5>
        <button onClick={goFirstPage}>Start again</button>
      </div>
    );
  }

  return (
    <StyledQuestionnaire>
      <ProgressBar max='4' value={page} />
      {page === 1 && <FirstPageContent />}
      {page === 2 && <SecondPageContent />}
      {page === 3 && <ThirdPageContent />}
      {page === 4 && <FourthPageContent />}
    </StyledQuestionnaire>
  );
}

export default Questionnaire;
