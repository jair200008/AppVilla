import './App.css';
import LoginButton from './components/login';
import LogoutButton from './components/logout';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientId = "72464211646-0hiu8ls489tmfvm6dqcn8ut4323hrith.apps.googleusercontent.com";

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      });
    }

    if (gapi && gapi.client) {
      gapi.load('client:auth2', start);
    }
  }, []);

  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
    </div>
  );
}

export default App;
