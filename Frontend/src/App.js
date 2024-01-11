// App.js
import React, { useEffect } from 'react';
import { gapi } from 'gapi-script';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import LoginES from './components/loginES';
import Home from './components/home';
import Error from './components/error';
import FormRegister from './components/formRegister';
import PageRestaurant from './components/restaurant/componentRestaurant';

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
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/loginES" element={<LoginES />} />
          <Route path="/home" element={<Home />} />
          <Route path="/formRegister" element={<FormRegister />} />
          <Route path="/componentRestaurant/*" element={<PageRestaurant />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
