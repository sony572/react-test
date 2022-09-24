import React from "react";
import ReactDOM from "react-dom";
import { TodoContext } from "../TodoContext";

import "./TodoModal.css";

function TodoModal({children}) {
    const {SetModalOpen, Create} = React.useContext(TodoContext);

    const ButtonPressedCreate = () => {
        const text = document.getElementById("modal-textarea").value;

        if(text.length) {
            Create(text);
            SetModalOpen(false);
        }
        else {
            alert("La descripcion de la tarea a agregar, no puede estar vacio.")
        }
    }
    

    return ReactDOM.createPortal(
        (
            <div className="background-modal">
                <div className="modal-box">
                    <div className="modal-title">Crear Tarea:</div>
                    <textarea type="text" id="modal-textarea" placeholder="Introduce la descricion del la nueva tarea" />
                    <button className="modal-create" onClick={ButtonPressedCreate}>Crear</button>
                </div>
            </div>
        ),
        document.getElementById("modal")
    )
}

export {TodoModal};