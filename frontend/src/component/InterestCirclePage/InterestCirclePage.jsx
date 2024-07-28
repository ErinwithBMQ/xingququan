import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axiosInstance from "../../../axios.config.js";

function InterestCirclePage() {
    const {id} = useParams(); // 获取动态参数id
    const [xqq_message, setXqq_message] = useState([]);

    useEffect(() => {
        axiosInstance.get(`/xqq/${id}`)
            .then(response => {
                setXqq_message(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>这是ID为{id}的兴趣圈页面</h1>
            <div>
                <h2>{xqq_message.xqq_name}</h2>
                <p>{xqq_message.introduction}</p>
                <p>{xqq_message.creator}</p>
            </div>
        </div>
    );
}

export default InterestCirclePage;
