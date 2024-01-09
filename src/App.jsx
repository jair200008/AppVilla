import './App.css';
import LoginButton from './components/login';
import LogoutButton from './components/logout';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
import loginES from './components/loginES'; 
import login from './components/login'

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
    <Routes>
        <Switch>
        <Route exact path="/" component={login} />
          <Route path="/loginES" component={loginES} />
        </Switch>
        <LoginButton />
        <LogoutButton />
    </Routes>
      </div>
  );
}

export default App;
