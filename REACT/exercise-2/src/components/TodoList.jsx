import useFetch from "../hooks/useFetch";
import { useState } from "react";
import useFilteredTodos from "../hooks/useFilteredTodos";
import React from "react";


function TodoList () {
    const {data,error,loading} = useFetch("https://jsonplaceholder.typicode.com/todos");
    const [searchTerm, setSearchTerm] = useState(''); 
    const filteredTodos = useFilteredTodos(data, searchTerm);

    if (loading) return <p>Loading todos...</p>;
    if(error) return <p>{error}</p>
    console.log(data);

    return (
        <div>
            <h1>Todo List...</h1>
            { <input 
                type="text" 
                placeholder="RIcerca todos..." 
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />}
            <ul>
                {filteredTodos.map((todo) => (
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