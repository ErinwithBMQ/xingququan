// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axiosInstance from "../../../axios.config.js";
import './InterestCirclePage.css'

function InterestCirclePage() {
    const {id} = useParams(); // 获取动态参数id
    const [xqq_message, setXqq_message] = useState([]);
    const [post_list, setPost_list] = useState([]);

    useEffect(() => {
        axiosInstance.get(`/xqq/${id}`)
            .then(response => {
                setXqq_message(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

        axiosInstance.get('/post/get_all_post', {params: {xqq_id: id}})
            .then(response => {
                setPost_list(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <div className={"fixed top-10 left-20 w-full"}>
                <button
                    className="flex items-center justify-center shadow-2xl p-4 rounded-xl cursor-pointer hover:bg-gray-100 w-1/6"
                    onClick={() => (window.location.href = "/xqq_choose.html")}
                >
                    <span className="text-xl font-semibold text-pink-200">返回</span>
                </button>
                <div className="por mb-4 mr-4 mt-20">
                    <img src={`http://127.0.0.1:7001/file/show?id=${xqq_message.image_id}`} alt="xqq image"/>
                </div>
                <div className={"shadow-xl w-1/4 p-3 mt-4 h-16 rounded-xl bg-gray-100 h-full"}>
                    <div className={"text-4xl font-semibold text-blue-200"}>
                        {xqq_message.xqq_name}
                    </div>
                </div>
                <div className={"mt-5 bg-pink-100 shadow-xl w-1/4 p-3 h-full rounded-xl mb-20"}>
                    <div className={"text-xl font-semibold text-blue-400"}>
                        创建者：{xqq_message.creator}
                    </div>
                    <div className={"text-xl font-semibold text-blue-400 whitespace-normal break-words"}>
                        简介：{xqq_message.introduction}
                    </div>
                </div>
                <button
                    className="flex items-center justify-center shadow-2xl p-4 rounded-xl cursor-pointer hover:bg-gray-100 w-1/4"
                    onClick={() => (window.location.href = `/xqq/${xqq_message.id}/post`)}
                >
                    <span className="text-xl font-semibold text-pink-200">发表帖子</span>
                </button>
            </div>
            <div className="flex flex-col bg-pink-100 items-center shadow-2xl p-4 rounded-xl w-3/4 contain">
                <div className={"text-3xl font-semibold text-white title"}>
                    帖子列表
                </div>
                <div>
                    {post_list.length === 0 && <div className="text-xl font-semibold text-white mt-4">暂无帖子</div>}
                </div>
                <div>
                    {post_list.map((post) => (
                        <div className="bg-blue-100 p-5 rounded-xl shadow-xl m-8" key={post.id}>

                            <div className="text-2xl font-semibold text-pink-300 mb-4 mr-4">
                                {post.title}
                            </div>

                            {post.image_id !== 0 && <div className={"mb-4"}>
                                <img src={`http://127.0.0.1:7001/file/show?id=${post.image_id}`} alt="xqq image"
                                     className="image-responsive"/>
                            </div>}
                            <div className={"flex mb-2"}>
                                <div
                                    className="text-lg font-semibold text-blue-400 mb-4 between">
                                    发布者：{post.poster_name}
                                </div>
                                <div className="text-lg font-semibold text-blue-400 mb-4">
                                    发布时间：{post.time}
                                </div>
                            </div>
                            <div className="text-lg font-semibold text-blue-300 whitespace-normal break-words">
                                内容：{post.message}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default InterestCirclePage;
