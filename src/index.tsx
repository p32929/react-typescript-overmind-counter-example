import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from "overmind-react";
import {ThemeProvider} from '@material-ui/core';
import {createOvermind} from 'overmind'
import {config} from './Overmind/OvermindHelper'
import {theme} from "./Others/Theme";
import Counter from "./Components/Counter";

const overmind = createOvermind(config)

ReactDOM.render(
    <React.StrictMode>
        <Provider value={overmind}>
            <ThemeProvider theme={theme}>
                <Counter name="React TypeScript MaterialUI Overmind Boilerplate"/>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
