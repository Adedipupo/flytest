import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store.js';
import { ThemeProvider } from '@mui/material';
import customTheme from './theme';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <ThemeProvider theme={customTheme}>
  <CssBaseline />
  <Provider store={store}>
   <BrowserRouter>
       <App /> 
   </BrowserRouter>   
  </Provider>
 </ThemeProvider> ,
  document.getElementById('root')
);


