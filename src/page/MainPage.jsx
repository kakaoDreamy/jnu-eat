import React, { useState } from 'react';
<<<<<<< HEAD
=======
import '../App.css';
>>>>>>> develop
import GlobalStyle from '../components/common/GlobalStyle';
import Layout from '../components/common/Layout';
import Header from '../components/common/Header';
import StatusBar from '../components/common/StatusBar';
import MapContents from '../components/Map/MapContents';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';
import ResultPage from '../components/ResultPage';
<<<<<<< HEAD
import RouletteContents from '../components/Roulette/RouletteContents';

function MainPage() {
=======
import KaMap from '../components/common/KaMap/KaMap';
import RouletteContents from '../components/Roulette/RouletteContents';

function App() {
>>>>>>> develop
  const resname = '백일흑야';
  const [state, setState] = useState({
    curStage: 1,
    location: '',
    time: '',
    rouletteList: '',
    rouletteResult: '',
<<<<<<< HEAD
    map: '',
=======
>>>>>>> develop
  });

  const nextStage = () => {
    setState({ ...state, curStage: state.curStage + 1 });
  };
<<<<<<< HEAD

=======
>>>>>>> develop
  console.log(state);
  return (
    <div className="App">
      <GlobalStyle />
      <Layout>
        <Header>제목</Header>
        <StatusBar>
          <ProgressBar curStage={state.curStage} />
        </StatusBar>
        <ResultPage resName={resname} />
<<<<<<< HEAD

=======
>>>>>>> develop
        {state.curStage === 5 && (
          <div>결과 페이지 : {state.rouletteResult.text}</div>
        )}

        {state.curStage !== 5 && state.curStage % 2 === 1 ? (
<<<<<<< HEAD
          <MapContents
            state={state}
            setState={setState}
            nextStage={nextStage}
          />
=======
          <MapContents state={state} setState={setState} nextStage={nextStage}>
            <KaMap />
          </MapContents>
>>>>>>> develop
        ) : (
          <RouletteContents
            state={state}
            setState={setState}
            nextStage={nextStage}
          />
        )}
      </Layout>
    </div>
  );
}

<<<<<<< HEAD
export default MainPage;
=======
export default App;
>>>>>>> develop
