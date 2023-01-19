import React from 'react';
import './App.css';
import GlobalStyle from './components/common/GlobalStyle';
import Layout from './components/common/Layout';
import Header from './components/common/Header';
import StatusBar from './components/common/StatusBar';
import Contents from './components/common/Contents';
import Footer from './components/common/Footer';
import SelectBox from './components/Select/SelectBox';
import ProgressBar from './components/common/ProgressBar/ProgressBar';
import ResultPage from './components/ResultPage';

function App() {
  const resname = '백일흑야';
  return (
    <div className="App">
      <GlobalStyle />
      <Layout>
        <Header>제목</Header>
        <StatusBar>
          <ProgressBar />
        </StatusBar>
        <ResultPage resName={resname} />
        <Contents />
        <Footer>
          <SelectBox />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
