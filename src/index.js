import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//Added for themeing
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { pink, green, red } from '@material-ui/core/colors';


//Adding UI Theme
const theme = createMuiTheme({
    palette: {
        primary: {
            //or
            main: '#FAE1DF',
            //main: pink[100],
            light: pink[300],
            dark: pink[900]
        },
        secondary: {
            main: green[500],
            light: green[300],
            dark: green[900]
        },
        error: red,
        //type: 'dark',
        type: 'light',
    },
    typography: {
        fontWeightMedium: 500,
        h1: {
            fontSize: 30,
            fontWeight: 800,
        },
        body1: {
        fontWeight: 500,
        },
        subtitle1: {
            fontSize: 12,
            fontStyle: 'bold',
            fontWeight: 800,
        },
        button: {
            fontStyle: 'bold',
            fontWeight: 900,
        },
    },
    spacing: {
        unit: 4
    },
        props: {
        MuiTypography: {
            variantMapping: {
            h1: 'h2',
            h2: 'h2',
            h3: 'h2',
            h4: 'h2',
            h5: 'h2',
            h6: 'h2',
            subtitle1: 'h2',
            subtitle2: 'h2',
            body1: 'span',
            body2: 'span',
            },
        },
        },
    });
    

ReactDOM.render( <MuiThemeProvider theme={theme}><App /> </MuiThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
