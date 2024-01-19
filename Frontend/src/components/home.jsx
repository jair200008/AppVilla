// eslint-disable-next-line no-unused-vars
import React, { useState }  from 'react';
import '../styles/home.css'; 
import {GoogleLogout } from "react-google-login";
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import 'animate.css';

const clientId = "72464211646-0hiu8ls489tmfvm6dqcn8ut4323hrith.apps.googleusercontent.com";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const userName = location.state && location.state.userName ? location.state.userName : '';

  const onSuccess = () => {
    console.log('Saliste correctamente');
    navigate('/');
  };
  const redirectToRestaurant = () => {
    navigate('/componentRestaurant');
  }
  
  return (
    <div className="home-container">
      <GoogleLogout
        clientId={clientId}
        buttonText="Salir"
        onLogoutSuccess={onSuccess}
        className="custom-google-logout-button"
      />
      <div className="principal">
        <p>Hola {userName} que deseas probar hoy?</p>
        <img src="/img/campana.png" alt="" className="notification"/>
      </div>
      <div className="search-bar">
        <input type="search" placeholder="Busca tu restaurante favorito" />
        <button>Buscar</button>
      </div>
     {/* 
           <img
        src="/img/hamburguesa.png"
        alt="Imagen"
        className="home-image animate__animated animate__backInLeft"
      />
     */}

      {/* Carrucel */}
      <section className="coleccion" id="patro">
        <div className="slider">
            <div className="slide-track">
                <div className="slide">
                    <img src="/img/hamburguesa.png" alt="" />
                </div>
                <div className="slide">
                    <img src="/img/pizza.png" alt="" />
                </div>
                <div className="slide">
                    <img src="/img/postre.png" alt="" />
                </div>
                <div className="slide">
                    <img src="/img/tacos.png" alt="" />
                </div>
                <div className="slide">
                    <img src="/img/postre.png" alt="" />
                </div>
                <div className="slide">
                    <img src="/img/vino.png" alt="" />
                </div>
                <div className="slide">
                    <img src="/img/limonada.png" alt="" />
                </div>

                <div className="slide">
                    <img src="/img/hamburguesa.png" alt="" />
                </div>
                <div className="slide">
                    <img src="/img/hamburguesa.png" alt="" />
                </div>
                <div className="slide">
                    <img src="/img/hamburguesa.png" alt="" />
                </div>
                <div className="slide">
                    <img src="/img/hamburguesa.png" alt="" />
                </div>
                <div className="slide">
                    <img src="/img/hamburguesa.png" alt="" />
                </div>
                <div className="slide">
                    <img src="/img/hamburguesa.png" alt="" />
                </div>
                <div className="slide">
                    <img src="/img/hamburguesa.png" alt="" />
                </div>
            </div>
        </div>
    </section>
      <div className="targets">
        <div className="target">
          <img src="/img/restaurant1.jpg" alt="Imagen"className="img-target" onClick={redirectToRestaurant} />
        </div>
        <div className="target">
          <Link to= "/componentRestaurant">
            <img src="/img/restaurant2.jpg" alt="Imagen"className="img-target"/>
          </Link>
        </div>
        <div className="target">
          <img src="/img/restaurant2.jpg" alt="Imagen"className="img-target"/>
        </div>
        <div className="target">
          <img src="/img/restaurant1.jpg" alt="Imagen"className="img-target"/>
        </div>
        <div className="target">
          <img src="/img/restaurant3.jpg" alt="Imagen"className="img-target"/>
        </div>
        <div className="target">
          <img src="/img/restaurant4.png" alt="Imagen"className="img-target"/>
        </div>
        <div className="target">
          <img src="/img/restaurant2.jpg" alt="Imagen"className="img-target"/>
        </div>
        <div className="target">
          <img src="/img/restaurant1.jpg" alt="Imagen"className="img-target"/>
        </div>
        <div className="target">
          <img src="/img/restaurant1.jpg" alt="Imagen"className="img-target"/>
        </div>
        <div className="target">
          <img src="/img/restaurant3.jpg" alt="Imagen"className="img-target"/>
        </div>
        <div className="target">
          <img src="/img/restaurant4.png" alt="Imagen"className="img-target"/>
        </div>
      </div>

    </div>
  );
};

export default Home;
