// src/pages/main/Main.js

import React from "react";
import {Link} from "react-router-dom";
import '../../styles/Main.css';

function Main() {
  return (
      <div className="main-container">
        <div className="grid-container">
          <Link to="/books" className="grid-item">Books</Link>
          <Link to="/dev" className="grid-item">웹 개발</Link>
          <Link to="/cs" className="grid-item">CS</Link>
          <Link to="/etc" className="grid-item">ETC</Link>
        </div>
      </div>
  );
}

export default Main;