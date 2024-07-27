import './register.css';
import {useState} from 'react';
import axios from 'axios';

function Register() {

    const [name, setName] = useState('');
    const [secret, setSecret] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!name || !secret) {
            alert('用户名和密码不得为空！');
            return;
        }

        try {
            const response = await axios.get('http://127.0.0.1:7001/user/find_user', {
                params: {
                    name,
                },
            });

            console.log("检测是否有用户");

            if (response.data !== false) {
                console.log(response.data, "用户已存在");
                alert('用户已存在。请更换用户名。');
                return;
            }

        } catch (error) {
            console.error(error);
            alert('创建失败。出现问题。');
        }

        try {
            const response = await axios.post('http://127.0.0.1:7001/user/create_user', {
                name,
                secret,
            });
            console.log(response.data.name, "用户成功创建");
            alert('你已经成功创建用户!');
        } catch (error) {
            console.error(error);
            alert('创建失败。');
        }
    };

    return (
        <div>
            <div className="shell">
                <form onSubmit={handleSubmit}>
                    <h2 className="title">Register</h2>

                    <input
                        type="text"
                        id="username"
                        placeholder="Username"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={secret}
                        onChange={(e) => setSecret(e.target.value)}
                    />

                    <input type="submit" value="Register" id="registerBtn"/>
                </form>
                <div className="footer">
                    <div className="Remember"></div>
                    <button id="Password" onClick={() => (window.location.href = "/login.html")}>
                        去登录
                    </button>
                </div>
            </div>


        </div>
    );
}

export default Register;


