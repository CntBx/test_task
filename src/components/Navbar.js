import React from "react";
import { NavLink } from "react-router-dom";
import moscow_transport from "../photos/moscow_transport.png";

export const Navbar = () => (
  <nav>
    <div>
      <img
        className="moscow_transport"
        alt="Московский Транспорт"
        src={moscow_transport}
        width={89}
        height={89}
      />
    </div>
    <ul className="navbar nav">
      <li className="nav item">
        <NavLink className="nav link" to="/" exact>
          Главная
        </NavLink>
      </li>
      <li className="nav item">
        <NavLink className="nav link" to="/posts">
          Посты
        </NavLink>
      </li>
      <li className="nav item">
        <NavLink className="nav link" to="/users">
          Пользователи
        </NavLink>
      </li>
    </ul>
  </nav>
);

// Навигация по страничкам с помощью компонента Navlink из библиотеки "react-router-dom"
