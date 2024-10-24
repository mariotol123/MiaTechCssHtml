import useFilteredTodos from "../hooks/useFilteredTodos";
import { TodoContext } from "../hooks/TodoContext";
import React, { useContext, useMemo, useRef, useEffect, useCallback } from "react";
import { Link, useSearchParams } from "react-router-dom";

function TodoList() {
  const { todos, error, loading } = useContext(TodoContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";
  const filteredTodos = useFilteredTodos(todos, searchTerm);
  const memoizedFilteredTodos = useMemo(() => filteredTodos, [filteredTodos]);
  const inputRef = useRef();

  const handleSearchChange = useCallback((e) => {
    const value = e.target.value;
    setSearchParams({ search: value });
  }, [setSearchParams]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <p>Loading todos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Todo List...</h1>
      {
        <input
          ref={inputRef}
          type="text"
          placeholder="Ricerca todos..."
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
