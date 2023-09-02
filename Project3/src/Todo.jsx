import { useState } from "react"

const Todo = () => {
    const [input, setInput] = useState("")
    const [todo, setTodo] = useState([])


    const addItem = () => {
        if (input) {
            setTodo([...todo, { title: input, status: "completed" }])
            setInput("")
        }
    }

    const handleUpdateStatus = (index) => {
        const updatedTodos = [...todo];
        updatedTodos[index].status =
            updatedTodos[index].status === 'completed' ? 'pending' : 'completed';
        setTodo(updatedTodos);
    };

    const removeItem = (index) => {
        const updatedItem = todo.filter((item, ind) => ind !== index)
        setTodo(updatedItem)
    }

    return (
        <>
            <div className="input-field">
                <input type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)} />
                <button className="add-btn" onClick={addItem}>Add</button>
            </div>

            <div className="item-container">
                {todo.map((item, index) => {
                    return <>
                        {item.status === "completed" ?
                            <div className="todo-container" key={index}>
                                <p className="number">{index + 1}</p>
                                {item.status === "completed" ?
                                    <textarea value={item.title} readOnly /> :
                                    <textarea value={item.title} readOnly style={{ textDecoration: "line-through" }} />
                                }
                                <p className="status">{item.status === "completed" ? "Status : Pending" : "Status : Completed"}</p>
                                <button className="btn" onClick={() => handleUpdateStatus(index)}>
                                    Update Status
                                </button>
                                <button className="remove btn" onClick={() => removeItem(index)}>Remove</button>
                            </div>
                            :
                            <div className="todo-container green" key={index}>
                                <p className="number">{index + 1}</p>
                                {item.status === "completed" ?
                                    <textarea value={item.title} /> :
                                    <textarea value={item.title} style={{ textDecoration: "line-through" }} />
                                }
                                <p className="status">{item.status === "completed" ? "Status : Pending" : "Status : Completed"}</p>
                                <button className="btn" onClick={() => handleUpdateStatus(index)}>
                                    Update Status
                                </button>
                                <button className="remove btn" onClick={() => removeItem(index)}>Remove</button>
                            </div>}
                    </>
                })}
            </div>
        </>
    )
}

export default Todo
