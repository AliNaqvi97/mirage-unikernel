import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ef6694',
      main: '#ec407a',
      dark: '#a52c55',
      contrastText: '#fff',
    },
    secondary: {
      light: '#9778ce',
      main: '#7e57c2',
      dark: '#583c87',
      contrastText: '#000',
    },
    background: {
      default: '#FAFAFA',
    },
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline/>
    <App />
  </MuiThemeProvider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
