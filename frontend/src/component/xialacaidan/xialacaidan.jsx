import './xialacaidan.css'

function Xialacaidan() {
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
            <li className="portrait">
                
            </li>
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
