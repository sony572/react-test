import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoItem.css";

function TodoItem({thisTodo, index}) {
    const {TodoComplete, TodoDelete} = React.useContext(TodoContext);

    return (
        <li className={("TodoItem " + (thisTodo.completed ? "completed" : ""))}>
            <div 
                className="icon check"
                onClick={() => TodoComplete(thisTodo, index)}
            />
            <div 
                className="icon delete" 
                onClick={() => TodoDelete(index)}
            >
            X
            </div>
            <div className="title">{thisTodo.title}</div>
        </li>
    )
}

export {TodoItem};