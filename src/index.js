import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './containers/App';
import { BrowserRouter } from "react-router-dom";
const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
ReactDOM.render(app, document.getElementById('root'));
