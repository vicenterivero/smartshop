import React from 'react';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom'
function Landinpage() {
    return (
        <div > 
    {/* 
       <div class="container margen   "> <div class="col-lg-6 col-md-5 order-md-1"><img class="img-fluid" src="https://cdn.pixabay.com/photo/2020/09/02/03/26/iphone-5537230__340.jpg" alt="" /></div>
          <div class="row flex-center">
       
            <div class="col-md-7 col-lg-6 mt-5 text-md-start">
              <h1 class="espacio fw-medium">Suscribete a nuestra lista<br />de usuarios preferidos.</h1>
              <p class="mt-3 mb-4 espacio">Los usuarios que se suscriben a la lista de usuarios preferidos reciben ofertas exclusivas de sus tiendas favoritas, ¿Qué esperas?.</p>
              
              <a class="btn btn-lg btn-danger hover-top btn-glow espacio" href="#">Suscribirse</a>
            </div>
          </div>
        </div> */}
<div class="contenidolan">
  
        <img class="imagen" src="https://cdn.pixabay.com/photo/2020/09/02/03/26/iphone-5537230_960_720.jpg" alt=""/>
        <div class="texto">
        <h1 class="espacio fw-medium">Suscribete a nuestra lista<br />de usuarios preferidos.</h1>
              <p class="mt-3 mb-4 espacio container__texto__p">Los usuarios que se suscriben a la lista de usuarios preferidos reciben ofertas exclusivas de sus tiendas favoritas, ¿Qué esperas?.</p>
              
              <Link class="btn btn-lg boton_raul hover-top btn-glow espacio"  to="/inicio">Suscribirse</Link>

        </div>
</div>
        </div>
    );
}

export default Landinpage;