import React from "react";
import TodoList from "./TodoList";
import { TodoProvider } from "../hooks/TodoContext";

function Home () {
    return (
            <TodoList />
    )
}

export default Home;