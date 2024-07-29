// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axiosInstance from "../../../axios.config.js";
import './InterestCirclePage.css'

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
            <button
                className="flex items-center justify-center shadow-2xl p-4 rounded-xl cursor-pointer hover:bg-gray-100 w-1/6"
                onClick={() => (window.location.href = "/xqq_choose.html")}
            >
                <span className="text-xl font-semibold text-pink-200">返回</span>
            </button>
            <div className="por mb-4 mr-4 mt-20">
                <img src={`http://127.0.0.1:7001/file/show?id=${xqq_message.image_id}`} alt="xqq image"/>
            </div>
            <div className={"shadow-2xl w-1/4 p-3 mt-4 h-16 rounded-xl bg-gray-100"}>
                <div className={"text-4xl font-semibold text-blue-200"}>{xqq_message.xqq_name}</div>
            </div>
            <div className={"mt-5 bg-pink-100 shadow-2xl w-1/4 p-3 h-full rounded-xl mb-20"}>
                <div className={"text-xl font-semibold text-blue-400"}>
                    创建者：{xqq_message.creator}
                </div>
                <div className={"text-xl font-semibold text-blue-400 whitespace-normal break-words"}>
                    简介：{xqq_message.introduction}
                </div>
            </div>
            <button
                className="flex items-center justify-center shadow-2xl p-4 rounded-xl cursor-pointer hover:bg-gray-100 w-1/4"
                onClick={() => (window.location.href = "/xqq_choose.html")}
            >
                <span className="text-xl font-semibold text-pink-200">发表帖子</span>
            </button>
        </div>
    );
}

export default InterestCirclePage;
