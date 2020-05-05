import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/core';

import { Provider } from 'react-redux';

import store from './redux/store';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
