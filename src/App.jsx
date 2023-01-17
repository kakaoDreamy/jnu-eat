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
import KaMap from './components/common/KaMap/KaMap';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Layout>
        <Header>제목</Header>
        <StatusBar>
          <ProgressBar />
        </StatusBar>
        <Contents>
          <KaMap />
        </Contents>
        <Footer>
          <SelectBox />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
