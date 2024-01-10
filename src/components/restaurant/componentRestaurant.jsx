import React from "react";
import {Link} from 'react-router-dom';
function PageRestaurant(){
    
    return (
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about">Acerca de</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>
        </nav>
      );
}

export default PageRestaurant;