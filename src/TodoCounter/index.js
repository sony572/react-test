import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
    const {CompletedTodos, TotalTodos} = React.useContext(TodoContext);

    return (
        <h1 className='TodoCounter'>Has completado {CompletedTodos} de {TotalTodos} tareas</h1>
    );
}

export {TodoCounter};