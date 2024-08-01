import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoForm from './TodoForm';

const TodoList = ({ token }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await axios.get('http://localhost:3008/api/todos', { headers: { Authorization: `Bearer ${token}` } });
      setTodos(response.data);
    };
    fetchTodos();
  }, [token]);

  const handleUpdate = async (id, updatedTodo) => {
    await axios.put(`http://localhost:3008/api/todos/${id}`, updatedTodo, { headers: { Authorization: `Bearer ${token}` } });
    setTodos(todos.map(todo => (todo._id === id ? { ...todo, ...updatedTodo } : todo)));
  };

  const handleDelete = async id => {
    await axios.delete(`http://localhost:3008/api/todos/${id}`, { headers: { Authorization: `Bearer ${token}` } });
    setTodos(todos.filter(todo => todo._id !== id));
  };

  return (
    <div>
      <h2>My To-Do List</h2>
      <TodoForm token={token} setTodos={setTodos} />
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.title}</span>
            <button onClick={() => handleUpdate(todo._id, { completed: !todo.completed })}>
              {todo.completed ? 'Unmark' : 'Complete'}
            </button>
            <button onClick={() => handleDelete(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;