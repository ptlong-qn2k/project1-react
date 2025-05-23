import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './Styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter basename="/project1-react">
            <App basename="project1-react" />
        </BrowserRouter>
    </React.StrictMode>,
);
