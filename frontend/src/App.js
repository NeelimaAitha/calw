import React, { useState } from 'react';
import Auth from './components/Auth';
import TodoList from './components/TodoList';

const App = () => {
  const [token, setToken] = useState('');

  return (
    <div>
      {token ? <TodoList token={token} /> : <Auth setToken={setToken} />}
    </div>
  );
};

export default App;
