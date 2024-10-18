// src/pages/Home.js

import React from "react";
import {Link} from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

function Home() {
  return (
      <div>
        <Header/>
        <h2> Welcome!</h2>
        <Link to="/login">
          <button>로그인</button>
        </Link>

        <Link to="/signup">
          <button>회원가입</button>
        </Link>
        <Footer/>
      </div>
  );
}

export default Home;