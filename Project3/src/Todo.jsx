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

    const editItem = (index, updateEdit) => {
        const updateItem = [...todo]
        updateItem[index] = updateEdit
        setTodo(updateItem)
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
                                    <textarea value={item.title} onChange={(e) => editItem(index, e.target.value)} /> :
                                    <textarea value={item.title} onChange={(e) => editItem(index, e.target.value)} style={{ textDecoration: "line-through" }} />
                                }
                                <p className="status">{item.status === "completed" ? "pending" : "completed"}</p>
                                <button onClick={() => handleUpdateStatus(index)}>
                                    Update Status
                                </button>
                                <button className="remove" onClick={() => removeItem(index)}>Remove</button>
                            </div>
                            :
                            <div className="todo-container green" key={index}>
                                <p className="number">{index + 1}</p>
                                {item.status === "completed" ?
                                    <textarea value={item.title} onChange={(e) => editItem(index, e.target.value)} /> :
                                    <textarea value={item.title} onChange={(e) => editItem(index, e.target.value)} style={{ textDecoration: "line-through" }} />
                                }
                                <p className="status">{item.status === "completed" ? "pending" : "completed"}</p>
                                <button onClick={() => handleUpdateStatus(index)}>
                                    Update Status
                                </button>
                                <button className="remove" onClick={() => removeItem(index)}>Remove</button>
                            </div>}
                    </>
                })}
            </div>
        </>
    )
}

export default Todo
