// src/services/authService.js

import {login, signup} from "../api/authApi";
import {setToken, getToken} from '../utils/tokenUtils';

export const handleLogin = async (username, password) => {
  try {
    const data = await login(username, password);
    setToken(data.token); // JWT 토큰 저장
    return data;
  } catch (error) {
    console.error('로그인 실패:', error);
    throw error;
  }
};

export const handleSignup = async (username, password, email) => {
  try {
    const data = await signup(username, password, email);
    return data;
  } catch (error) {
    console.log('회원가입 실패:', error);
    throw error;
  }
};

export const isAuthenticated = () => {
  return !!getToken(); // 토큰이 있으면 인증된 상태
};