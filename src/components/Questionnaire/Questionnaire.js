import { useEffect, useState } from 'react';
import { StyledQuestionnaire } from './Questionnaire.styled';
import {
  Button,
  Form,
  InputCheckbox,
  InputCheckboxContainer,
  InputCheckboxError,
  InputCheckboxSlider,
  InputText,
  InputTextError,
  PermissionText,
  ProgressBar,
  ProgressBarContainer,
  QuestionnaireHeader,
} from '../../helpers/imports';

function Questionnaire() {
  let progressValue = 1;

  const [page, setPage] = useState(1);
  const [maxValueOfProgress, setmaxValueOfProgress] = useState(0);
  const [dataPermission, setDataPermission] = useState('');

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dataPermission: dataPermission,
  });

  useEffect(() => {
    setmaxValueOfProgress(5);
    console.log(dataPermission);
  }, []);

  const goNextPage = () => {
    setPage((page) => page + 1);
  };

  const goFirstPage = () => {
    window.location.reload();
  };

  const goSubmit = (e) => {
    e.preventDefault();

    if (progressValue === maxValueOfProgress) {
      setPage((page) => page + 1);
      console.log(data);
      progressValue = 0;
    } else {
      console.log('form error');
    }
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

  const handleProgress = () => {
    if (data.firstName.length >= 2) {
      progressValue += 1;
    }
    if (data.lastName.length >= 2) {
      progressValue += 1;
    }
    if (data.email.length >= 2 && data.email.includes('@')) {
      progressValue += 1;
    }
    if (data.dataPermission !== dataPermission) {
      progressValue += 1;
    }
  };

  handleProgress();

  const firstNameInputValue = (e) => {
    setData({ ...data, firstName: e.target.value });

    if (e.target.value.length <= 1) {
      setFirstNameError(true);
    }
    if (e.target.value.length >= 2) {
      setFirstNameError(false);
    }
  };

  const lastNameInputValue = (e) => {
    setData({ ...data, lastName: e.target.value });
    if (e.target.value.length <= 1) {
      setLastNameError(true);
    }
    if (e.target.value.length >= 2) {
      setLastNameError(false);
    }
  };

  const emailInputValue = (e) => {
    setData({ ...data, email: e.target.value });
    if (e.target.value.length <= 1 && !e.target.value.includes('@')) {
      setEmailError(true);
    }
    if (e.target.value.length >= 2 && e.target.value.includes('@')) {
      setEmailError(false);
    }
  };

  const checkboxHandler = () => {
    setDataPermission(false);

    if (dataPermission === false) {
      setDataPermission(true);
      setData({ ...data, dataPermission: true });
    }
  };

  return (
    <StyledQuestionnaire>
      {page === 1 && <FirstPageContent />}
      {page === 2 && (
        <>
          <QuestionnaireHeader>inForm</QuestionnaireHeader>
          <ProgressBarContainer>
            <ProgressBar max={maxValueOfProgress} value={progressValue} />
          </ProgressBarContainer>
          <Form>
            <InputText
              name='firstName'
              type='text'
              placeholder='first name'
              value={firstNameInputValue}
            />
            <InputTextError firstNameError={firstNameError}>
              Incorrect first name value
            </InputTextError>
            <InputText
              name='lastName'
              type='text'
              placeholder='last name'
              value={lastNameInputValue}
            />
            <InputTextError lastNameError={lastNameError}>
              Incorrect last name value
            </InputTextError>
            <InputText
              name='email'
              type='text'
              placeholder='email'
              value={emailInputValue}
            />
            <InputTextError emailError={emailError}>
              Incorrect email adress value
            </InputTextError>
            <InputCheckboxContainer>
              <InputCheckbox
                type='checkbox'
                checkboxHandler={checkboxHandler}
              />
              <InputCheckboxSlider />
              <PermissionText>
                I hereby give consent for my personal data included in my
                application to be processed for the purposes of the recruitment
                process under the personal data protection act as of 29 august
                1997, consolidated text: journal of laws 2016, item 922 as
                amended.
              </PermissionText>
            </InputCheckboxContainer>
            <InputCheckboxError dataPermission={dataPermission}>
              Select permission
            </InputCheckboxError>
            <Button type='submit' goSubmit={goSubmit}>
              Submit
            </Button>
          </Form>
        </>
      )}
      {page === 3 && <LastPageContent />}
    </StyledQuestionnaire>
  );
}

export default Questionnaire;
