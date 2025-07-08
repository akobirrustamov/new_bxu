import React from "react";
import logo from "../../pages/images/logo.png";
import "./header.css";

function header() {
  return (
    <div>
      <header className="header">
        <div className="logo-container">
          <a href="/public" className="logo-link">
            <img src={logo} alt="University Logo" className="logo" />
            <span className="university-name">Buxoro Xalqaro Universiteti</span>
          </a>
        </div>
        <nav className="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">Afzalliklar</li>
            <li className="nav-item">Yo'nalishlar</li>
            <li className="nav-item">Litsenziya</li>
            <li className="nav-item">Joylashuv</li>
          </ul>
          <button className="apply-button">Ariza topshirish</button>
        </nav>
      </header>
    </div>
  );
}

export default header;
