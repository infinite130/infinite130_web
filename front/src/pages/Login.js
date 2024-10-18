// src/pages/Login.js

import React, {useState} from "react";
import {handleLogin} from "../services/authService";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin(username, password);
      alert('로그인 성공');
    } catch (error) {
      alert('로그인 실패: ' + error.message);
    }
  };

  return (
      <div>
        <h2>Login</h2>
        <form onSubmit={onSubmit}>
          <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
          />
          <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">로그인</button>
        </form>
      </div>
  );
}

export default Login;