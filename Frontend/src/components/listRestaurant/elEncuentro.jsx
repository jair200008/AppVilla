import React, { Component } from "react";

class ElEncuentro extends Component {
  showModal = (title, imageSrc, price) => {
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalImage").src = imageSrc;
    document.getElementById("modalPrice").textContent = price;
    document.getElementById("myModal").style.display = "flex";
  };

  closeModal = () => {
    document.getElementById("myModal").style.display = "none";
  };

  addToCart = () => {
    // Agregar lógica para añadir el producto al carrito
    alert("Producto agregado al carrito");
    this.closeModal();
  };

  render() {
    return (
      <div className="containerText">
        <h1>Bienvenido al Restaurante El Encuentro</h1>
        <div
          className="menu-card"
          onClick={() => this.showModal("Postre", "/img/postre.jpg", "15.99")}
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
            onClick={() => this.showModal("Burritos Mexicanos", "/img/tacos.jpg", "15.99")}
        >
          <img src="/img/tacos.jpg" alt="" />
          <div className="menu-details">
            <h2>Burritos Mexicanos</h2>
            <p>
              Descripción del plato 1. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
            <p class="price">$15.99</p>
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
            <p class="price">$15.99</p>
          </div>
        </div>

        <div className="menu-card">
          <img src="/img/pasta.jpg" alt="" />
          <div className="menu-details">
            <h2>Name product</h2>
            <p>
              Descripción del plato 1. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
            <p class="price">$15.99</p>
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
            <p class="price">$15.99</p>
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
            <p class="price">$15.99</p>
          </div>
        </div>

        {/*Modal*/}
        <div className="modal" id="myModal">
          <div className="modal-content">
            <span onClick={this.closeModal} style={{position:'absolute', top:'10px', right:'10px', fontSize:'24px', cursor:'pointer'}}>&times;</span>
            <img id="modalImage" src="" alt="Comida" />
            <h2 id="modalTitle"></h2>
            <p id="modalPrice"></p>
            <div className="modal-buttons">
              <button className="cancel" onClick={this.closeModal}>
                Seguir comprando
              </button>
              <button className="add-to-cart" onClick={this.addToCart}>
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ElEncuentro;
