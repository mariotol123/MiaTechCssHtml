    import useFetch from "../hooks/useFetch";
    import {
    useState,
    useCallback,
    useMemo,
    useRef,
    useEffect,
    useContext,
    } from "react";
    import useFilteredTodos from "../hooks/useFilteredTodos";
    import { TodoContext } from "../hooks/TodoContext";
    import { Link } from "react-router-dom";
    import React from "react";

    function TodoList() {
    const { todos, error, loading } = useContext(TodoContext);
    const [searchTerm, setSearchTerm] = useState("");
    const filteredTodos = useFilteredTodos(todos, searchTerm);
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
    if (error) return <p>{error}</p>;
    console.log(todos);

    return (
        <div>
        <h1>Todo List...</h1>
        {
            <input
            ref={inputRef}
            type="text"
            placeholder="RIcerca todos..."
            value={searchTerm}
            onChange={handleSearchChange}
            />
        }
        <ul>
            {memoizedFilteredTodos.map((todo) => (
            <li key={todo.id}>
                <Link to={`/todo/${todo.id}`}>
                {todo.title} {todo.completed ? "✅" : "❌"}
                </Link>
            </li>
            ))}
        </ul>
        </div>
    );
    }

    export default TodoList;
