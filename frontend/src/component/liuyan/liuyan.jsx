import './liuyan.css'
import {useState} from "react";

const Liuyan = () => {
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState('');
    const [messageText, setMessageText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (messageText.trim() === '') {
            alert('请输入内容');
            return;
        }
        const currentTime = getCurrentTime();
        const newMessage = {
            username: username || '匿名',
            message: messageText,
            time: currentTime
        };
        setMessages([...messages, newMessage]);
        setUsername('');
        setMessageText('');
    };

    const getCurrentTime = () => {
        const now = new Date();
        return `${now.getFullYear()}/${('0' + (now.getMonth() + 1)).slice(-2)}/${('0' + now.getDate()).slice(-2)} ${('0' + now.getHours()).slice(-2)}:${('0' + now.getMinutes()).slice(-2)}:${('0' + now.getSeconds()).slice(-2)}`;
    };


    return (
        <>
            <div className="messages">
                <h1>留言板</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
                           placeholder="用户名"/>
                    <textarea value={messageText} onChange={(e) => setMessageText(e.target.value)}
                              placeholder="留言内容"/>
                    <button type="submit"
                            className="flex items-center justify-center shadow-2xl p-4 rounded-xl cursor-pointer hover:bg-gray-100">
                        <span className="text-xl font-semibold text-blue-200">留言</span>
                    </button>
                </form>
                <div id="messageBoard">
                    {messages.map((msg, index) => (
                        <div key={index} className="message">
                            <div className="message-info">
                                <div className="info">
                                    <img src="1.jpg" alt="头像" width="50" height="50"/>
                                    <strong>{msg.username}</strong>
                                </div>
                                <span>发布于:{msg.time}</span>
                            </div>
                            <div className="content">{msg.message}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}

export default Liuyan;
