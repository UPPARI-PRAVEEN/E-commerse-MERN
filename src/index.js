import { ColorModeScript, ChakraProvider, extendTheme } from '@chakra-ui/react';
import React, { StrictMode } from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import ColorModeSwitcher from './ColorModeSwitcher';

import { Provider } from "react-redux";
import store from "./components/redux/store"

const theme = extendTheme({});

const root = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <Provider store={store}>
     
        <App />
      
      </Provider>
    </ChakraProvider>
  </StrictMode>,
  root
);
