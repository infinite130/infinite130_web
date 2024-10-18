// src/api/userApi.js

const API_URL = "http://localhost:8080/api";

export const getUserProfile = async (token) => {
  const response = await fetch(`${API_URL}/profile}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('회원 프로필 fetch 실패');
  }

  return response.json();
};