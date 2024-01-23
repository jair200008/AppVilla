import React, { Component } from "react";
import { Link} from "react-router-dom";
class Carrito extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carrito: JSON.parse(localStorage.getItem("carrito")) || [],
    };
  }

  eliminarProducto = (index) => {
    // Copiar el carrito actual y eliminar el producto por su índice
    const nuevoCarrito = [...this.state.carrito];
    nuevoCarrito.splice(index, 1);

    // Actualizar el estado y el carrito en el localStorage
    this.setState({ carrito: nuevoCarrito }, () => {
      localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    });
  };

  render() {
    return (
      <div className="contentCarrito">
        <h1>Carrito de Compras</h1>
        <div id="carrito-content">
          {this.state.carrito.map((producto, index) => (
            <div key={index} className="producto">
              <img src={producto.imageSrc} alt={producto.title} />
              <h2>{producto.title}</h2>
              <p>Precio: {producto.price}</p>
              <p>Cantidad: {producto.quantity}</p>
              <button onClick={() => this.eliminarProducto(index)}>
                Eliminar
              </button>
              <hr />
            </div>
          ))}
        </div>
        <button>
        <Link to="/componentRestaurant">Volver al Restaurante</Link>
        </button>
      </div>
    );
  }
}

export default Carrito;
