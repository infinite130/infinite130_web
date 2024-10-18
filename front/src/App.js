// src/App.js

import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Main from './pages/main/Main';
import Books from './pages/main/Books';
import Dev from './pages/main/Dev';  // 웹 개발 페이지
import CS from './pages/main/CS';  // 컴퓨터 과학 페이지
import ETC from './pages/main/ETC';  // 기타 페이지

function App() {
  return (
      <Router>
        <Routes>

          {/* 홈 페이지 */}
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/signup" element={<Signup/>}/>

          {/* 메인 페이지 */}
          <Route path="/main" element={<Main/>}/>
          <Route path="/books" element={<Books/>}/>
          <Route path="/web-dev" element={<Dev/>}/>
          <Route path="/cs" element={<CS/>}/>
          <Route path="/etc" element={<ETC/>}/>
        </Routes>
      </Router>
  );
}

export default App;