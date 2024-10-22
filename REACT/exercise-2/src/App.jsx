import React from "react";
import { TodoProvider } from "./hooks/TodoContext";
import TodoList from "./components/TodoList";

function App() {
    return (
      
        <TodoProvider>
            <TodoList />
        </TodoProvider>
    );
}

export default App;