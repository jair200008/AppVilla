import React, { Component } from "react";
import Filtro from "../listRestaurant/filtro";
import { Link } from "react-router-dom";
class ElEncuentro extends Component {

  showModal = (title, imageSrc, price, description) => {
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalImage").src = imageSrc;
    document.getElementById("modalPrice").textContent = price;
    document.getElementById("modalDescrip").textContent = description;
    document.getElementById("myModal").style.display = "flex";
  };

  closeModal = () => {
    document.getElementById("myModal").style.display = "none";
  };

  addToCart = () => {
    let cantidad = document.getElementById("quantity").value;
    if (cantidad > 0) {
      let producto = {
        title: document.getElementById("modalTitle").textContent,
        imageSrc: document.getElementById("modalImage").src,
        price: document.getElementById("modalPrice").textContent,
        quantity: cantidad,
      };

      // Obtener carrito actual del localStorage
      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

      // Agregar el nuevo producto al carrito
      carrito.push(producto);

      // Guardar el carrito actualizado en el localStorage
      localStorage.setItem("carrito", JSON.stringify(carrito));
      alert("Producto agregado al carrito: " + cantidad);
      this.closeModal();

    } else {
      alert("Cantidad inválida");
    }
  };

  state = {
    cantidad: 1,
  };

  render() {
    return (
      <div className="containerText">
        <h1>Bienvenido al Restaurante El Encuentro</h1>
        <div className="menu-container">
          <div
            className="menu-card"
            onClick={() =>
              this.showModal(
                "Postre",
                "/img/postre.jpg",
                "$15.99",
                "Descripcion del plato. Lorem ipsum"
              )
            }
          >
            <img src="/img/postre.jpg" alt="" />
            <div className="menu-details">
              <h2>Postre</h2>
              <p>
                Descripción del plato 1. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
              <p className="price">$15.99</p>
            </div>
          </div>
          {/*----------------*/}
          <div
            className="menu-card"
            onClick={() =>
              this.showModal(
                "Burritos Mexicanos",
                "/img/tacos.jpg",
                "$15.99",
                "Descripción del plato 1. Lorem ipsum dolor sit amet, consectetur"
              )
            }
          >
            <img src="/img/tacos.jpg" alt="" />
            <div className="menu-details" id="comidaRapida">
              <h2>Burritos Mexicanos</h2>
              <p>
                Descripción del plato 1. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
              <p className="price">$15.99</p>
            </div>
          </div>
          {/*----------------*/}
          <div className="menu-card">
            <img src="/img/pizza.jpg" alt="" />
            <div className="menu-details">
              <h2>Name product</h2>
              <p>
                Descripción del plato 1. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
              <p className="price">$15.99</p>
            </div>
          </div>

          <div className="menu-card">
            <img src="/img/hamburguesa.png" alt="" />
            <div className="menu-details">
              <h2>Name product</h2>
              <p>
                Descripción del plato 1. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
              <p className="price">$15.99</p>
            </div>
          </div>

          <div className="menu-card" id="comidaRapida">
            <img src="/img/pasta.jpg" alt="" />
            <div className="menu-details">
              <h2>Name product</h2>
              <p>
                Descripción del plato 1. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
              <p className="price">$15.99</p>
            </div>
          </div>

          <div className="menu-card">
            <img src="/img/limonada.jpg" alt="" />
            <div className="menu-details">
              <h2>Name product</h2>
              <p>
                Descripción del plato 1. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
              <p className="price">$15.99</p>
            </div>
          </div>

          <div className="menu-card" id="comidaRapida">
            <img src="/img/pasta.jpg" alt="" />
            <div className="menu-details">
              <h2>Name product</h2>
              <p>
                Descripción del plato 1. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
              <p className="price">$15.99</p>
            </div>
          </div>

          <div className="menu-card">
            <img src="/img/limonada.jpg" alt="" />
            <div className="menu-details">
              <h2>Name product</h2>
              <p>
                Descripción del plato 1. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
              <p className="price">$15.99</p>
            </div>
          </div>
        </div>

        {/*Modal*/}
        <div className="modal" id="myModal">
          <div className="modal-content">
            <span
              onClick={this.closeModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                fontSize: "24px",
                cursor: "pointer",
              }}
            >
              &times;
            </span>
            <img id="modalImage" src="" alt="Comida" />
            <h2 id="modalTitle"></h2>
            <p id="modalDescrip"></p>
            <p id="modalPrice"></p>
            <div className="modal-buttons">
              <input
                type="number"
                id="quantity"
                min={1}
                value={this.state.cantidad}
                onChange={(e) =>
                  this.setState({ cantidad: Math.max(1, +e.target.value) })
                }
                style={{
                  fontSize: "15px",
                  textAlign: "center",
                  width: "100px",
                }}
              ></input>
              <button className="cancel" onClick={this.addToCart}>
                Agregar
              </button>
              <Link to={"/componentRestaurant/carrito"}>
              <button className="add-to-cart" onClick={this.addToCart}>
                Agregar y Comprar
              </button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Filtro></Filtro>
        </div>
      </div>
    );
  }
}

export default ElEncuentro;
