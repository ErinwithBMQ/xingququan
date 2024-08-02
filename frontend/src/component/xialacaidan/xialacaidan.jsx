import './xialacaidan.css'
import {useEffect, useState} from "react";
import axiosInstance from "../../../axios.config.js";

function Xialacaidan() {
    const [user_message, setUser_message] = useState([]);
    useEffect(() => {
        axiosInstance.get('/user/get_message')
            .then(response => {
                setUser_message(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <ul className="shell">
            <li className="button">
                <span>消息</span>
                <ul>
                    <li>回复我的</li>
                    <li>收到的赞</li>
                    <li>我的消息</li>
                </ul>
            </li>
            <li className="button">
                <span>动态</span>
            </li>
            <div className={"por1 mt-4"}>
                <img src={`http://127.0.0.1:7001/file/show?id=${user_message.image_id}`} alt="xqq image"/>
            </div>
            <li className="button">
                <span>收藏</span>
                <ul>
                    <li>默认收藏夹</li>
                    <li>UI设计</li>
                    <li>懂得都懂</li>
                </ul>
            </li>
            <li className="button">
                <span>投稿</span>
                <ul>
                    <li>专栏投稿</li>
                    <li>音频投稿</li>
                    <li>贴纸投稿</li>
                    <li>视频投稿</li>
                    <li>投稿管理</li>
                </ul>
            </li>
        </ul>
    )
}

export default Xialacaidan;
