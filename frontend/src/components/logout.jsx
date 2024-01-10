import {GoogleLogout } from "react-google-login";

const clientId = "72464211646-0hiu8ls489tmfvm6dqcn8ut4323hrith.apps.googleusercontent.com";

function Logout() {
    const onSuccess = () => {
        alert("Logout successful");
    }
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