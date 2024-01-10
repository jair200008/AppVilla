import React, { useState } from 'react';
import { GoogleLogin } from "react-google-login";
import "../styles/styles.css";
import { useNavigate } from 'react-router-dom';
const clientId = "72464211646-0hiu8ls489tmfvm6dqcn8ut4323hrith.apps.googleusercontent.com";


function Login(){
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  const redirectES = () => {
    navigate('/loginES')
  };
  // Inicio de sesion
  const onSuccess = (res) => {
    if (res && res.profileObj && res.profileObj.givenName) {
      const name = res.profileObj.givenName;
      setUserName(name);
      navigate('/home', { state: { userName: name } });
    } else {
      console.log('User named no found');
    }
  };

  const onFailure = (res) => {
    if(res){
      console.log('Logout Success:', res);
    }else{
      //navigate('/')// Aca redirigimos a la pantalla de home despues de ingresar con google (JuanMa)
    }
  };

  const redirectFormRegister =() =>{
    navigate('/formRegister')
  };

  return (
      <div className="login-container">
      <div className="login-info-container">
        <div className="bandera">
            <img src="/img/colombia.png" alt="" onClick={redirectES} style={{cursor: 'pointer'}}></img>
        </div>
        <h1 className="title" style={{ fontSize: '30px' }}>Log in with</h1>
        
        <div className="social-login">
          <div className="social-login-element">
            <GoogleLogin
              className="social-login-element-google"
              clientId={clientId}
              buttonText="Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
            />
          </div>
          <div className="social-login-element">
            <img src="/img/facebook.svg" alt="facebook-image" />
            <span>Facebook</span>
          </div>
        </div>
        <div className="imgHombre animate__animated animate__backInLeft">
        <img src="/img/hombre.png" alt="" />
        </div>
        <p>or</p>
        <form className="inputs-container">
          <input className="input" type="text" placeholder="Username" />
          <input className="input" type="password" placeholder="Password" />
          <p>Forgot password? <span className="span">Click here</span></p>
          <button className="btn">login</button>
          <p>Don't have an account? <span className="span" onClick={redirectFormRegister}>Sign Up</span></p>
        </form>
      </div>
      <img className="image-container" src="/img/login.svg" alt="" />
    </div>
  );
}

export default Login;
