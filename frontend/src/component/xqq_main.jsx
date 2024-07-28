// eslint-disable-next-line no-unused-vars
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import InterestCirclePage from './InterestCirclePage/InterestCirclePage.jsx';
import App from './app/App.jsx';

function XqqMain() {
    return (
        <Router>
            <Routes>
                <Route path="/xqq/:id" element={<InterestCirclePage/>}/>
                <Route path="/" element={<App/>}/>
            </Routes>
        </Router>
    );
}

export default XqqMain;
