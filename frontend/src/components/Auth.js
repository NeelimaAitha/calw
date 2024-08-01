// Auth.js
import React, { useState } from 'react';
import axios from 'axios';

const Auth = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = async () => {
    const url = isLogin ? 'http://localhost:3008/api/auth/login' : 'http://localhost:3008/api/auth/register';
    try {
      const response = await axios.post(url, { email, password });
      if (isLogin) setToken(response.data.token);
      alert('Success');
    } catch (err) {
      alert('Error');
    }
  };

  return (
    <div>
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleAuth}>{isLogin ? 'Login' : 'Register'}</button>
      <button onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Switch to Register' : 'Switch to Login'}</button>
    </div>
  );
};

export default Auth;

