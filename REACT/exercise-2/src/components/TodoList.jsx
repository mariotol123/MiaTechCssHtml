import { useDispatch, useSelector } from 'react-redux';
import { toggleTodoComplete } from '../features/todosSlice';
import React, { useRef, useEffect, useCallback } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";
  const inputRef = useRef();

  const handleSearchChange = useCallback((e) => {
    const value = e.target.value;
    setSearchParams({ search: value });
  }, [setSearchParams]);

  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleToggleComplete = (id) => {
    dispatch(toggleTodoComplete(id));
  };

  return (
    <div>
      <h1>Todo List...</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder="Ricerca todos..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <Link to={`/todo/${todo.id}`}>
              {todo.title} {todo.completed ? "✅" : "❌"}
            </Link>
            <button onClick={() => handleToggleComplete(todo.id)}>
              {todo.completed ? "Mark Incomplete" : "Mark Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
