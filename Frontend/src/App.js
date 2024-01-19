import React, { useEffect, lazy, Suspense } from 'react';
import { gapi } from 'gapi-script';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/styles.css'

const LazyLogin = lazy(() => import('./components/login'));
const LazyLoginES = lazy(() => import('./components/loginES'));
const LazyHome = lazy(() => import('./components/home'));
const LazyError = lazy(() => import('./components/error'));
const LazyFormRegister = lazy(() => import('./components/formRegister'));
const LazyPageRestaurant = lazy(() => import('./components/restaurant/componentRestaurant'));

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
          <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><LazyLogin /></Suspense>} />
          <Route path="/loginES" element={<Suspense fallback={<div>Loading...</div>}><LazyLoginES /></Suspense>} />
          <Route path="/home" element={<Suspense fallback={<div>Loading...</div>}><LazyHome /></Suspense>} />
          <Route path="/formRegister" element={<Suspense fallback={<div>Loading...</div>}><LazyFormRegister /></Suspense>} />
          <Route path="/componentRestaurant/*" element={<Suspense fallback={<div>Loading...</div>}><LazyPageRestaurant /></Suspense>} />
          <Route path="/error" element={<Suspense fallback={<div>Loading...</div>}><LazyError /></Suspense>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;



// Este codigo es mas rapido pero al momento de recargar la pagina, se le van los estilos

/*import React, { useEffect, lazy, Suspense } from 'react';
import { gapi } from 'gapi-script';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Login = lazy(() => import('./components/login'));
const LoginES = lazy(() => import('./components/loginES'));
const Home = lazy(() => import('./components/home'));
const Error = lazy(() => import('./components/error'));
const FormRegister = lazy(() => import('./components/formRegister'));
const PageRestaurant = lazy(() => import('./components/restaurant/componentRestaurant'));

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
          <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Login /></Suspense>} />
          <Route path="/loginES" element={<Suspense fallback={<div>Loading...</div>}><LoginES /></Suspense>} />
          <Route path="/home" element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
          <Route path="/formRegister" element={<Suspense fallback={<div>Loading...</div>}><FormRegister /></Suspense>} />
          <Route path="/componentRestaurant/*" element={<Suspense fallback={<div>Loading...</div>}><PageRestaurant /></Suspense>} />
          <Route path="/error" element={<Suspense fallback={<div>Loading...</div>}><Error /></Suspense>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;*/
