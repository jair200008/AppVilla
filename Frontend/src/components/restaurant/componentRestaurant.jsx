import React, { lazy, Suspense } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import REncuentro from "../listRestaurant/elEncuentro";
import Filtro from '../listRestaurant/filtro';

const Carrito = lazy(() => import('./carrito'));

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
          <Link to="/componentRestaurant/carrito">
            <FontAwesomeIcon icon={faCartShopping} style={{color: "black"}} />
          </Link>
        </div>
        <nav id="nav">
          <ul className="navOptions">
            <li>
              <Link to="/home">Ir a Home</Link>
            </li>
            <li>
              <Link to="/componentRestaurant/carrito">Opcion 2</Link>
            </li>
            <li>
              <Link to="/componentRestaurant/carrito">Opcion 3</Link>
            </li>
            <li>
              <Link to="/componentRestaurant/carrito">Llamar nuevo componente</Link>
            </li>
          </ul>
        </nav>
        <div className="nav-responsive" onClick={mostrarOcultarMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<REncuentro />} />
        <Route path="/carrito" element={<Suspense fallback={<div>Loading...</div>}><Carrito /></Suspense>} />
      </Routes>
    </div>
  );
};

export default PageRestaurant;
