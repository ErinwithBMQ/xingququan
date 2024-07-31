// eslint-disable-next-line no-unused-vars
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import InterestCirclePage from './InterestCirclePage/InterestCirclePage.jsx';
import App from './app/App.jsx';
import CreatePost from "./create_post/create_post.jsx";
import ShowPost from "./post/post.jsx";
import CreateComment from "./Comment/Comment.jsx";

function XqqMain() {
    return (
        <Router>
            <Routes>
                <Route path="/xqq/:id" element={<InterestCirclePage/>}/>
                <Route path="/" element={<App/>}/>
                <Route path="/xqq/:id/post" element={<CreatePost/>}/>
                <Route path="/post/:id" element={<ShowPost/>}/>
                <Route path="/post/:id/comment" element={<CreateComment/>}/>
            </Routes>
        </Router>
    );
}

export default XqqMain;
