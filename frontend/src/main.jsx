import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/app/App.jsx';
import './index.css';
import Xialacaidan from "./component/xialacaidan/xialacaidan.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className={"fixed top-0 left-0"}>
            <Xialacaidan/>
        </div>

        <div className="flex">
            <App/>
        </div>
    </React.StrictMode>,
);
