import React from "react";
import { useLANStorage } from "./useStorage";

const TodoContext = React.createContext();



function TodoProvider(props) {
    // const [Todos, SaveTodos] = useLocalStorage("TODOS_V1", []);
    const {item:Todos, saveItem: SaveTodos, loading} = useLANStorage("TODOS_V1", []);

    const [SearchTodo, SetSearchTodo] = React.useState("");
    const [ModalOpen, SetModalOpen] = React.useState(false);

    let TodosFilters;
    let searching;

    if((searching = SearchTodo.length)) {
        TodosFilters = Todos.filter(todo => {
            return todo.title.toLowerCase().includes(SearchTodo.toLowerCase());
        })
    } else {
        TodosFilters = Todos;
    }

    const TotalTodos = TodosFilters.length;
    const CompletedTodos = TodosFilters.filter(todo => todo.completed).length;

    const TodoComplete = (todo, index) => {
        
        const NewTodos = [...Todos];
        
        NewTodos[index].completed = !todo.completed;
        console.log(todo.completed);
        SaveTodos(NewTodos);
    }

    const TodoDelete = (index) => {
        const NewTodos = Todos.filter((todo, index_act) => index !== index_act);
        SaveTodos(NewTodos);
    }

    const Create = (Title) => {
        let NewTodos = [...Todos];
        NewTodos.push({
            title: Title,
            completed: false
        });
        SaveTodos(NewTodos);
    };
    
    return (
        <TodoContext.Provider value={{
            TotalTodos,
            CompletedTodos,
            SearchTodo,
            SetSearchTodo,
            TodosFilters,
            TodoComplete,
            TodoDelete,
            Create,
            loading,
            searching,
            ModalOpen,
            SetModalOpen,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoProvider, TodoContext };

