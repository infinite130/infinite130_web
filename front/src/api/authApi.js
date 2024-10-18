// src/api/authApi.js

const API_URL = "http://localhost:8080/api";

export const login = async (username, password) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({username, password}),
    mode: 'cors',
  });

  if (!response.ok) {
    throw new Error('로그인 실패');
  }

  return response.json();
};

export const signup = async (username, password, email) => {
  const response = await fetch(`${API_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({username, password, email}),
    mode: 'cors',
  });

  if (!response.ok) {
    throw new Error('회원가입 실패')
  }

  return response.json();
};