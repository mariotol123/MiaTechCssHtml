import { createContext, useState, useEffect } from "react";
import useFetch from "./useFetch";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const { data, error, loading } = useFetch("https://jsonplaceholder.typicode.com/todos");
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        if (data) {
            setTodos(data);
        }
    }, [data]);

    return (
        <TodoContext.Provider value={{ todos, setTodos, loading, error }}>
            {children}
        </TodoContext.Provider>
    );
};