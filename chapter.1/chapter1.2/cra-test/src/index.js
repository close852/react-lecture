import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'core-js/features/string/pad-start'

ReactDOM.render(<App />, document.getElementById('root'));
// set "HTTPS=true" && npm start
//npm run build

/*
    polyfill을 넣을 수 있다.
    npm install core-js
*/