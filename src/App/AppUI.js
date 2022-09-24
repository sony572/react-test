import React from "react";
import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import { TodoCreate } from "../TodoCreate";
import { TodoContext } from "../TodoContext";
import {TodoModal} from "../TodoModal";

function AppUI() {
    const {ModalOpen} = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList />
            <TodoCreate />
            {ModalOpen && <TodoModal />}
        </React.Fragment>
    );
}

export {AppUI}