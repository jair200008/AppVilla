import React, { Component } from "react";

export default class ElEncuentro extends Component{

    render(){
        return(
            <div className="containerText">
                <h1>Bienvenido al Restaurante El Encuentro</h1>
                <div className="imagenCarta">
                    <img src="/img/carta.jpg" alt="Restaurante el Encuentro"/>
                </div>
            </div>
            );
    }
}