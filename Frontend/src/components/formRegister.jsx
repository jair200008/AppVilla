import { useNavigate } from 'react-router-dom';
import React, { useRef } from 'react';

function FormRegister() {
  const navigate = useNavigate();
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const redirectLogin = () => {
    navigate('/');
  };

  const validatePassword = () => {
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return false;
    }

    const numberRegex = /\d/;
    if (!numberRegex.test(password)) {
      alert('La contraseña debe contener al menos un número');
      return false;
    }

    return true;
  };

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/src/styles/stylesRegister.css" />
        <title>Login</title>
      </head>
      <body>
        <div className="login-container">
          <div className="login-info-container">
            <h1 className="title" style={{ fontSize: '30px' }}>Register</h1>
            <img src="/img/registro-en-linea.png" alt="" />
            <form className="inputs-container" method="post">
              <input className="input" type="text" placeholder="Username" />
              <input className="input" type="password" placeholder="Password" ref={passwordRef} />
              <input className="input" type="password" placeholder="Confirm Password" ref={confirmPasswordRef} />
              <button className="btn" onClick={(e) => {
                e.preventDefault();
                if (validatePassword()) {
                  alert('Registro exitoso'); 
                }
              }}>Create User</button>
              <p>Already have an account? <span className="span" onClick={redirectLogin}>Login</span></p>
            </form>
          </div>
          <img className="image-container" src="/img/login.svg" alt="" />
        </div>
      </body>
    </html>
  );
}

export default FormRegister;
