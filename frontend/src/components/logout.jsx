import {GoogleLogout } from "react-google-login";

const clientId = "72464211646-0hiu8ls489tmfvm6dqcn8ut4323hrith.apps.googleusercontent.com";

function Logout() {
      // salir de la sesion
  const onSuccess = (res) => {
    if(res){
      console.log('Salio:', res);
      //history.push('/login')// Aca redirigimos a la pantalla de home despues de ingresar con google (JuanMa)
    }else{
      console.log('Error de salida:', res);
    }
  };
  return (
    <div id="signoutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}
export default Logout;