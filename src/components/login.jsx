import { GoogleLogin } from "react-google-login";
import "../styles/styles.css";
const clientId = "72464211646-0hiu8ls489tmfvm6dqcn8ut4323hrith.apps.googleusercontent.com";

function Login() {
  const onSuccess = (res) => {
    alert('Login Success:');
    // Realiza las acciones necesarias después de un inicio de sesión exitoso
  };

  const onFailure = (res) => {
    console.log('Login Failed:', res);
    // Realiza las acciones necesarias después de un inicio de sesión fallido
  };



  return (
    <div className="login-container">
      <div className="login-info-container">
        <div className="bandera">
            <img src="src/img/colombia.png" alt=""/>
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
            <img src="src/img/facebook.svg" alt="facebook-image" />
            <span>Facebook</span>
          </div>
        </div>
        <p>or</p>
        <form className="inputs-container">
          <input className="input" type="text" placeholder="Username" />
          <input className="input" type="password" placeholder="Password" />
          <p>Forgot password? <span className="span">Click here</span></p>
          <button className="btn">login</button>
          <p>Don't have an account? <span className="span">Sign Up</span></p>
        </form>
      </div>
      <img className="image-container" src="src/img/login.svg" alt="" />
    </div>
  );
}

export default Login;
