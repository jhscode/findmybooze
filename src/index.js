import React from 'react';
import ReactDOM from 'react-dom';
import App from './scripts/App';
import styles from './styles/styles.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
