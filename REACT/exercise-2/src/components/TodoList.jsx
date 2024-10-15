import useFetch from "../hooks/useFetch";
import React from "react";


function TodoList () {
    const {data,error,loading} = useFetch("https://jsonplaceholder.typicode.com/todos");

    if (loading) return <p>Loading todos...</p>;
    if(error) return <p>{error}</p>
    console.log(data);

    return (
        <div>
            <h1>Todo List...</h1>
            <ul>
                {data.map((todo) => (
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