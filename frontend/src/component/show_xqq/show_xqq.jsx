import './show_xqq.css'
import axiosInstance from '/axios.config.js';
import {useEffect, useState} from "react";

function ShowXqq() {
    const [xqq_list, setXqq_list] = useState([]);
    useEffect(() => {
        axiosInstance.get('/xqq/get_all')
            .then(response => {
                setXqq_list(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <div className="flex flex-col bg-pink-100 items-center shadow-2xl p-4 rounded-xl w-3/4">
            <h1 className={"text-3xl font-semibold text-white title"}>
                兴趣圈列表
            </h1>
            {xqq_list.map((xqq) => (
                <div className="bg-blue-100 p-4 rounded-xl shadow-xl w-5/6 m-4" key={xqq.id}>
                    <div className="text-xl font-semibold text-pink-300 mb-4">
                        {xqq.xqq_name}
                    </div>
                    <div className="text-lg text-blue-300">
                        {xqq.introduction}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ShowXqq;
