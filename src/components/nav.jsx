import React from 'react';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom'
function nav() {
    return (
        <div>
         
<div class="header">
  <div class="container">
      <ul>
          <li><span class="glyphicon glyphicon-time" aria-hidden="true"></span>Ahorra tiempo y ve por lo seguro</li>
          <li><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>Crea tu lista</li>
          <li><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span><a href="mailto:info@example.com">info@smartshop.com</a></li>
      </ul>
  </div>
</div>

<div class="header-bot">
  <div class="container">
      <div class="col-md-3 header-left">
          <h1>
              <a href="index.html">
                  <img src="images/logo3.jpg"></img>
                      
                  </a>
          </h1>
      </div>
      <div class="col-md-6 header-middle">
          <form>
              <div class="search">
                  <input type="search" value="Buscar" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Buscar';}" required=""></input>
              </div>
       
              <div class="sear-sub">
                  <input type="submit" value=" "></input>
              </div>
            
          </form>
      </div>
{/*       <div class="col-md-3 header-right footer-bottom">
          <ul>
              <li><a href="/login" class="use1" ><span>Login</span></a>

              </li>

              <li><a class="fb" href="#"></a></li>
              <li><a class="twi" href="#"></a></li>
              <li><a class="insta" href="#"></a></li>
              <li><a class="you" href="#"></a></li>
          </ul>
      </div> */}
      <div class="clearfix"></div>
  </div>
</div>
<div class="ban-top">
<div class="container">
  <div class="top_nav_left">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
    
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        </button>
      </div>

      <div class="collapse navbar-collapse menu--shylock" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav menu__list">
        <li class="menu__item "> <Link to="/inicio" class="menu__link">Inicio</Link></li>

        <li class=" menu__item"><Link to="/departamentos" class="menu__link">Departamentos</Link></li>
        <li class=" menu__item"><Link to="/sucursales" class="menu__link">Sucursales</Link></li>
        <li class=" menu__item"><Link to="/contacto" class="menu__link">Mi li sta</Link></li>
   {/*      <li class=" menu__item"><Link to="/mi-lista" class="menu__link">Mi lista</Link></li> */}
                  <li class=" menu__item"><Link to="/nosotros" class="menu__link">Nosotros</Link></li>
                  <li class=" menu__item"><Link to="/contacto" class="menu__link">Login</Link></li>
                {/*   <li class= " menu__item"><a  class="menu__link" href="#">Perfil</a>
                      <ul class="submenu">
                           <li>

                              <a href="/login">Login</a>

                          </li>
                          <li><a href="/register">registro</a></li>
                      </ul>
                  </li> */}

        </ul>
      </div>
      </div>
    </nav>
  </div>
  <div class="top_nav_right">
    <div class="cart box_1">
          <a href="checkout.html">
            <h3> <div class="total">
             	<i class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></i> 
              <span class="simpleCart_total"></span> <span id="simpleCart_quantity" class="simpleCart_quantity"></span> productos</div>

            </h3>
          </a>
          <p><a href="javascript:;" class="simpleCart_empty">Mi lista</a></p>

    </div>
  </div>
  <div class="clearfix"></div>
</div>
</div>
        </div>  
    );
}

export default nav;