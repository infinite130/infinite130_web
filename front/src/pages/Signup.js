// src/pages/Signup.js

import React, {useState} from "react";
import {handleSignup} from "../services/authService";

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleSignup(username, password, email);
      alert('회원가입 성공');
    } catch (error) {
      alert('회원가입 실패: ' + error.message);
    }
  };

  return (
      <div>
        <h2>회원가입</h2>
        <form onSubmit={onSubmit}>
          <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
          />
          <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
          />
          <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">회원가입</button>
        </form>
      </div>
  );
}

export default Signup;