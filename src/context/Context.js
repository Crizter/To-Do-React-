// Context.js
import React, { createContext } from "react";
import { useContext} from "react";

export const ToDoContext = createContext ({
    todos: [
        {
            id:1 , 
            todo : "todo msg",
            completed : false 

        }
    ],
    addTodo :(todo ) =>{},
    deleteTodo : (id) => {},
    updateTodo : (id, todo) => {},
    toggleComplete : (id) => {}

})

export const useTodo = () => { 
    return useContext(ToDoContext)
}

export const TodoProvider =  ToDoContext.Provider