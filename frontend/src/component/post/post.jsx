import './post.css'
import axiosInstance from '/axios.config.js';
// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function ShowPost() {
    const [post, setPost] = useState([]);
    const [comment_list, setComment_list] = useState([]);
    const {id} = useParams(); // 获取动态参数id
    const [creator_photo, setCreator_photo] = useState([]);

    useEffect(() => {
        axiosInstance.get('/post/get_post_by_id', {params: {id: id}})
            .then(response => {
                setPost(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

        axiosInstance.get('/post/get_all_comment', {params: {post_id: id}})
            .then(response => {
                setComment_list(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

        axiosInstance.get('/user/touxiang', {params: {name: post.poster_name}})
            .then(response => {
                setCreator_photo(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id, post.poster_name]);
    return (
        <>
            <div className={"flex w-full"}>
                <div className={"flex flex-col lr_between"}>
                    <button
                        className="flex items-center justify-center shadow-2xl p-4 rounded-xl cursor-pointer hover:bg-gray-100 w-1/6 mb-8"
                        onClick={() => (window.location.href = `/xqq/${post.xqq_id}`)}
                    >
                        <span className="text-xl font-semibold text-pink-200">返回</span>
                    </button>
                    <div className="flex flex-col bg-pink-100 items-center shadow-2xl p-4 rounded-xl my_width">
                        <div className={"text-3xl font-semibold text-white title"}>
                            帖子详情
                        </div>
                        <div className="flex bg-blue-100 p-4 rounded-xl shadow-xl w-full m-4">
                            <div className="por mb-4 mr-4">
                                <img src={`http://127.0.0.1:7001/file/show?id=${creator_photo}`}
                                     alt="xqq image"/>
                            </div>
                            <div className={"mr-6"}>

                            </div>
                            <div className={"flex flex-col justify-center"}>
                                <div className="text-3xl font-semibold text-pink-300 mb-4 ml-4">
                                    {post.title}
                                </div>
                                <div
                                    className="text-xl font-semibold text-blue-400 mb-4">
                                    发布者：{post.poster_name}
                                </div>
                                <div className="text-xl font-semibold text-blue-400">
                                    发布时间：{post.time}
                                </div>
                            </div>
                        </div>
                        <div className="bg-blue-100 p-4 rounded-xl shadow-xl w-full m-4">
                            {post.image_id !== 0 && <div className={"mb-4"}>
                                <img src={`http://127.0.0.1:7001/file/show?id=${post.image_id}`} alt="xqq image"
                                     className="image-responsive_post"/>
                            </div>}
                            <div className="text-lg font-semibold text-blue-300 whitespace-normal break-words">
                                内容：{post.message}
                            </div>
                        </div>
                    </div>
                    <button
                        className="flex items-center justify-center shadow-2xl p-4 rounded-xl cursor-pointer hover:bg-gray-100 w-1/2 mt-8"
                        onClick={() => (window.location.href = `/post/${post.id}/comment`)}
                    >
                        <span className="text-xl font-semibold text-pink-200">发表评论</span>
                    </button>
                </div>
                <div className="flex flex-col bg-pink-100 items-center shadow-2xl p-4 rounded-xl w-3/5 h-full">
                    <div>
                        <div className={"text-3xl font-semibold text-white title"}>
                            评论区
                        </div>
                        <div>
                            {comment_list.length === 0 &&
                                <div className="text-xl font-semibold text-white mt-4">暂无评论</div>}
                        </div>
                        <div>
                            {comment_list.map((comment) => (
                                <div className="bg-blue-100 p-5 rounded-xl shadow-xl m-8" key={comment.id}>
                                    <div className={"flex content-center justify-center mb-2"}>
                                        <div
                                            className="text-lg font-semibold text-blue-400 mb-4 between_comment">
                                            评论者：{comment.creator}
                                        </div>
                                        <div className="text-lg font-semibold text-blue-400 mb-4">
                                            评论时间：{comment.time}
                                        </div>
                                    </div>

                                    <div className="text-lg font-semibold text-blue-300 whitespace-normal break-words">
                                        内容：{comment.message}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ShowPost;
