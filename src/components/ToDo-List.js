import React from "react";
import Todo from "../ToDo";

const ToDoList = props => {
    console.log(props);
    return (
        <div className="todo-list">
            {props.todo.map((task, id) => (
                <Todo item={task} key={id} toggleItem={props.toggleItem} />
            ))}
            <button className="btn" onClick={props.clearCompleted}>
                Clear Completed
            </button>
        </div>
    );
};

export default ToDoList;