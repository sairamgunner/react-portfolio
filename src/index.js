import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './App';
import Jokes from './components/Jokes';
import './index.css';
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter history={createBrowserHistory()}>
        <Routes>
            <Route path='/' element={<Header><App /></Header>} />
            <Route path='/jokes' element={<Header><Jokes /></Header>} />
        </Routes>
    </BrowserRouter>
);