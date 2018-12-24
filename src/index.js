import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from '../dist/service-worker'



ReactDOM.render( < App / > , document.getElementById("app"));
registerServiceWorker();