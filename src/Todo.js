import React from 'react'
import "./Todo.css"

const Todo = ({title}) => {
    return (
        <div className="todo">
            <h1 className="todo__header">{title}</h1>
        </div>
    )
}

export default Todo
