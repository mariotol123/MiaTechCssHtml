import useFetch from "../hooks/useFetch";
import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import useFilteredTodos from "../hooks/useFilteredTodos";
import React from "react";


function TodoList () {
    const {data,error,loading} = useFetch("https://jsonplaceholder.typicode.com/todos");
    const [searchTerm, setSearchTerm] = useState(''); 
    const filteredTodos = useFilteredTodos(data, searchTerm);
    const memoizedFilteredTodos = useMemo(() => filteredTodos, [filteredTodos]);
    const inputRef = useRef();

    const handleSearchChange = useCallback((e) => {
        setSearchTerm(e.target.value);
    }, []);


    useEffect(() => {
        const timer = setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }, 100); //Non mi funzionava perche useEffect veniva eseguito prima del montaggio di input.

    }, []);

    if (loading) return <p>Loading todos...</p>;
    if(error) return <p>{error}</p>
    console.log(data);

    return (
        <div>
            <h1>Todo List...</h1>
            { <input 
                ref={inputRef}
                type="text" 
                placeholder="RIcerca todos..." 
                value={searchTerm}
                onChange={handleSearchChange}
            />}
            <ul>
                {memoizedFilteredTodos.map((todo) => (
                    <li key={todo.id}>
                    {todo.title} {todo.completed ? "✅" : "❌"}
                </li>
                ))
                }
            </ul>
        </div>
    )
}


export default TodoList;