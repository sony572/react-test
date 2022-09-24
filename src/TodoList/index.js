import React from 'react';
import {TodoItem} from '../TodoItem';
import "./TodoList.css";
import { TodoContext } from '../TodoContext';


function TodoList() {
    const {loading, TodosFilters, searching} = React.useContext(TodoContext);

    function Details() {
        if(loading) return (
            <div className='loading'>Cargando...</div>
        )
        else if(searching && !TodosFilters.length) return (
            <div className='place'>Sin resultados</div>
        )
        else if(!TodosFilters.length) return (
            <div className='place'>Crea una tarea</div>
        )
    }

    return (
        <ul className='TodoList'>
            <Details />
            {TodosFilters.map((value, index) => (
                <TodoItem key={value.title} thisTodo={value} index={index} />
            ))}
        </ul>
    );
}

export {TodoList};