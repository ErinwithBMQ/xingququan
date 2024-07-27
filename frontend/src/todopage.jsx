import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Todo from "./component/todo/todo.jsx";
import UserLogin from "./component/user.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Todo/>
        <UserLogin/>
    </React.StrictMode>,
);
