import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createOvermind} from 'overmind';
import {Provider} from 'overmind-react';
import {config} from './Overmind/OvermindHelper'
import Counter from "./Components/Counter";

export const overmind = createOvermind(config, {
    devtools: false,
});

ReactDOM.render(
    <Provider value={overmind}>
        <React.StrictMode>
            <Counter/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
