import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './app/App.js';
import * as serviceWorker from './app/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
