import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouse } from '@fortawesome/free-solid-svg-icons';
import Prueba from "./prueba";
import REncuentro from "../listRestaurant/elEncuentro";

const PageRestaurant = () => {
  let menuVisible = false;

  // Funcion que oculta o muestra el menu
  function mostrarOcultarMenu() {
    if (menuVisible) {
      document.getElementById("nav").classList = "";
      menuVisible = false;
    } else {
      document.getElementById("nav").classList = "responsive";
      menuVisible = true;
    }
  }

  return (
    <div>
      <div className="navContainer">
        <div className="iconHouse">
          <Link to="/home">
            <FontAwesomeIcon icon={faHouse} style={{color: "black"}} />
          </Link>
        </div>
        <nav id="nav">
          <ul className="navOptions">
            <li>
              <Link to="/componentRestaurant/prueba">Opcion 1</Link>
            </li>
            <li>
              <Link to="/componentRestaurant/prueba">Opcion 2</Link>
            </li>
            <li>
              <Link to="/componentRestaurant/prueba">Opcion 3</Link>
            </li>
            <li>
              <Link to="/componentRestaurant/prueba">Llamar componente</Link>
            </li>
          </ul>
        </nav>
        <div className="nav-responsive" onClick={mostrarOcultarMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<REncuentro />} />
        <Route path="/prueba" element={<Prueba />} />
      </Routes>
    </div>
  );
};

export default PageRestaurant;
