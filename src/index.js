import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
// import App from './components/App';
import Skeleton from './components/common/Skeleton'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Skeleton/>,
    document.getElementById('root'));
registerServiceWorker();
