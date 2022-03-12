import Questionnaire from './components/Questionnaire/Questionnaire';
import ResetStyle from './components/Global/Reset';
import GlobalStyle from './components/Global/Global';

function App() {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <div className='App'>
        <Questionnaire />
      </div>
    </>
  );
}

export default App;
