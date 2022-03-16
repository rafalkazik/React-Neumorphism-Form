import { useEffect, useState } from 'react';
import { StyledQuestionnaire } from './Questionnaire.styled';
import { goNextPage, goFirstPage } from '../../helpers/handlers';
import {
  Button,
  Form,
  InputCheckbox,
  InputCheckboxContainer,
  InputCheckboxError,
  InputCheckboxSlider,
  InputText,
  InputTextError,
  IntroPage,
  IntroPageButton,
  IntroPageText,
  LastPage,
  LastPageButton,
  LastPageText,
  PermissionText,
  ProgressBar,
  ProgressBarContainer,
  QuestionnaireHeader,
} from '../../helpers/imports';

function Questionnaire() {
  let progressValue = 1;
  const regexOnlyNumbers = /^[0-9]*$/;
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const [page, setPage] = useState(1);
  const [maxValueOfProgress, setmaxValueOfProgress] = useState(0);
  const [dataPermission, setDataPermission] = useState('');

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dataPermission: dataPermission,
  });

  useEffect(() => {
    setmaxValueOfProgress(6);
  }, []);

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

  const handleProgress = () => {
    if (data.firstName.length >= 2) {
      progressValue += 1;
    }
    if (data.lastName.length >= 2) {
      progressValue += 1;
    }
    if (regexEmail.test(data.email)) {
      progressValue += 1;
    }
    if (regexOnlyNumbers.test(data.phone) && data.phone.length >= 9) {
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
    if (!regexEmail.test(e.target.value)) {
      setEmailError(true);
    }
    if (regexEmail.test(e.target.value)) {
      setEmailError(false);
    }
  };

  const phoneInputValue = (e) => {
    setData({ ...data, phone: e.target.value });
    if (!regexOnlyNumbers.test(e.target.value) || data.phone.length <= 8) {
      setPhoneError(true);
    }
    if (regexOnlyNumbers.test(e.target.value) && data.phone.length >= 8) {
      setPhoneError(false);
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
      {page === 1 && (
        <IntroPage>
          <QuestionnaireHeader>inForm</QuestionnaireHeader>
          <IntroPageText>Complete the form and send it to us.</IntroPageText>
          <IntroPageButton goNextPage={() => goNextPage(setPage)}>
            Start
          </IntroPageButton>
        </IntroPage>
      )}
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
            <InputText
              name='phone'
              type='text'
              placeholder='phone'
              value={phoneInputValue}
            />
            <InputTextError phoneError={phoneError}>
              Incorrect phone number value
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
      {page === 3 && (
        <LastPage>
          <QuestionnaireHeader>inForm</QuestionnaireHeader>
          <LastPageText>
            Thank you, the form has been submitted correctly. We will respond as
            soon as possible.
          </LastPageText>
          <LastPageButton goFirstPage={goFirstPage}>
            fill in the form again
          </LastPageButton>
        </LastPage>
      )}
    </StyledQuestionnaire>
  );
}

export default Questionnaire;
