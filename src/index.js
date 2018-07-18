import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css'
import { Provider } from 'react-redux';
import store from './store'
ReactDOM.render(<Provider store={store}>
    <Router>
        <App></App>
    </Router>
</Provider>, document.getElementById('root'));

if (process.env.NODE_ENV === 'development') {
    require("./mock");
    registerServiceWorker();
}
