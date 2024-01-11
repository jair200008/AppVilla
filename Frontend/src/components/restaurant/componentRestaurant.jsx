import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Prueba from "./prueba";
import Home from "../home";

const PageRestaurant = () => {
  return (
    <div>
      <div className="navContainer">
        <div className="iconHouse">
          <Link to="/home">
            <img src="/img/casa.png" alt="" />
          </Link>
        </div>
        <ul className="navOptions">
          <li>
            <Link to="/componentRestaurant/prueba">Opcion 1</Link>
          </li>
          <li>
            <Link to="/componentRestaurant/prueba">Opcion 2</Link>
          </li>
          <li>
            <Link to="/componentRestaurant/prueba">Llamar componente</Link>
          </li>
        </ul>
      </div>
      <div>
        <h1>Bienvenido a name</h1>
      </div>
      <Routes>
        <Route path="/" element={<div>Informacion propia de la pagina de restaurant</div>} />
        <Route path="/prueba" element={<Prueba />} />
      </Routes>
    </div>
  );
};

export default PageRestaurant;
