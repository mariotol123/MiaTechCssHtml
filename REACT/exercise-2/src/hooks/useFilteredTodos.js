import { useState, useEffect } from "react";

function useFilteredTodos(todos, searchTerm) {
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        if (!searchTerm) {
            setFilteredTodos(todos);
        } else {
            const filtered = todos.filter(todo => 
                todo.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredTodos(filtered);
        }
    }, [todos, searchTerm]);

    return filteredTodos;
}

export default useFilteredTodos;