import React from 'react';

import Routes from './routes';
import GlobalStyle from './styles/global';

import AppProvider from './hooks/index';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppProvider>
        <Routes />
      </AppProvider>
    </>
  );
}


export default App;
