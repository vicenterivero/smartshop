import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom'
/* import Hola from './components/hola'

import Contador from './components/contador' */
// import Listado from './components/Listado'
import Temperatura from './components/Temperatura'
import Nav from './components/nav'
import Footer from './components/Footer'
import Landinpage from './components/Landinpage'
/* import Inicio from './components/Inicio'
import nosotros from './components/Footer' */
import Inicio from './components/Inicio'
import Departamentos from './components/Departamentos'
import FormularioContacto from './components/FormularioContacto'




function App() {
  return (
    <Router /* className="App" */>
{/* 
<Link to="/inicio">inicio</Link>
<Link to="/departamentos">departamentos</Link>
<Link to="/sucursales">sucursales</Link>
<Link to="/mi-lista">mi lista</Link> */}
 <Nav/>

      <Switch>
   
        <Route path="/departamentos">
         <Departamentos/>
        </Route>
        <Route path="/sucursales">
         sucursales
        </Route>
        <Route path="/contacto">
         <FormularioContacto/>
        </Route>
        <Route path="/nosotros">
         nosotros
        </Route>
        <Route path="/inicio">
         <Inicio/>
        </Route>
        <Route path="/">
         <Landinpage/>
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
