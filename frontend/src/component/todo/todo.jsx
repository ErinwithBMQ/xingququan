import "./todo.css"

function Todo() {
    return (
        <>
            <div className="a">
                <div className="title">
                    北沐清的todo app
                </div>

                <div className="todo-form">
                    <input className="todo-input" type="text" placeholder="add a todo"/>
                    <div className="todo-bottom">
                        add todo
                    </div>
                </div>

                <div className="item completed">
                    <div className="flex">
                        <input type="checkbox"/>
                        <span className="name">吃饭</span>
                    </div>

                    <div className="del">del</div>
                </div>

                <div className="item">
                    <div className="flex">
                        <input type="checkbox"/>
                        <span className="name">吃饭</span>
                    </div>

                    <div className="del">del</div>
                </div>

                <div className="item">
                    <div className="flex">
                        <input type="checkbox"/>
                        <span className="name">吃饭</span>
                    </div>

                    <div className="del">del</div>
                </div>

            </div>
        </>
    )
}

export default Todo;
