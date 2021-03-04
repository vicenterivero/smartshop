import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom'
/* import Hola from './components/hola'

import Contador from './components/contador' */
// import Listado from './components/Listado'
import Temperatura from './components/Temperatura'
import Nav from './components/nav'
import Footer from './components/Footer'




function App() {
  return (
    <Router /* className="App" */>

<Link to="/inicio">inicio</Link>
<Link to="/departamentos">departamentos</Link>
<Link to="/sucursales">sucursales</Link>
<Link to="/mi-lista">mi lista</Link>
 <Nav/>

      <Switch>
   
        <Route path="/departamentos">
         departamentos
        </Route>
        <Route path="/sucursales">
         sucursales
        </Route>
        <Route path="/mi-lista">
         mi-lista
        </Route>
        <Route path="/nosotros">
         nosotros
        </Route>
        <Route path="/inicio">
         Inicio
        </Route>
        <Route path="/">
         landingpage
        </Route>
      </Switch>
   {/*    <h1>Hoslsaaa</h1> */}
   {/*  <Contador/> */}
  
{/* <Listado/> */}
{/* <Temperatura/> */}

<Footer/>
    </Router> 
  );
}

export default App;
