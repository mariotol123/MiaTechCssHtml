import React from "react";
import { TodoProvider } from "./hooks/TodoContext";
import TodoList from "./components/TodoList";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";

function App() {
    return (
        <TodoProvider>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
        </Routes>
      </Router>
    </TodoProvider>
    );
}

export default App;