import React from 'react';

import Routes from './routes';
import GlobalStyle from './styles/global';

import AppProvider from './hooks/index';
import { Loader } from './styles/loader';

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <Loader/> */}
      <AppProvider>
        <Routes/>
      </AppProvider>
    </>
  );
}


export default App;
