import React from "react";
import './TodoSearch.css';
import { TodoContext } from "../TodoContext";

function TodoSearch() {
    const {SearchTodo, SetSearchTodo} = React.useContext(TodoContext);
    
    const searchChangeFunction = (event) => {
        console.log(SearchTodo);
        SetSearchTodo(event.target.value);
    }

    return (
        <input
            className="TodoSearch" 
            type={'text'} 
            placeholder="Filtar Tareas"
            value={SearchTodo}
            onChange={searchChangeFunction}
        ></input>
    );
}

export { TodoSearch };