import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCreate.css';



function TodoCreate() {
    const {ModalOpen, SetModalOpen} = React.useContext(TodoContext);

    return (
        <button 
            className={"TodoCreate" + (ModalOpen ? " close" : "")}
            onClick={() => {
                SetModalOpen(!ModalOpen);
            }}
        >+</button>
    );
}

export {TodoCreate}