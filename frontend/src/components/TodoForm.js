import React, { useState } from 'react';
import axios from 'axios';

const TodoForm = ({ token, setTodos }) => {
  const [title, setTitle] = useState('');

  const handleAddTodo = async () => {
    const response = await axios.post('/api/todos', { title }, { headers: { Authorization: `Bearer ${token}` } });
    setTodos(prevTodos => [...prevTodos, response.data]);
    setTitle('');
  };

  return (
    <div>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="New To-Do" />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default TodoForm;
