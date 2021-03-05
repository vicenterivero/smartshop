import React from 'react';

function Footer() {
    return (
        <div>
          <div class="footer">
      <div class="container">
        <div class="col-md-3 footer-left">
          <h2><a href="index.html"><img src="images/logo3.jpg" alt=" " /></a></h2>
          <p>Conosotros conseguiras grandes ahorros en la despensa que hagas, suscribete a la lista de usuarios preferidos para obtener ofertas exclusivas de tus tiendas favoritas.</p>
        </div>
        <div class="col-md-9 footer-right">
          <div class="col-sm-6 newsleft">
            <h3>Suscribete a nuestras ofertas!</h3>
          </div>
          <div class="col-sm-6 newsright">
            <form>
              <input type="text" value="Email" ></input>
              <input type="submit" value="Enviar"></input>
            </form>
          </div>
          <div class="clearfix"></div>
          <div class="sign-grds">
            <div class="col-md-4 sign-gd">
              <h4>Mapa del sitio</h4>
              <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/departamentos">Departamentos</a></li>
                <li><a href="/sucursales">Sucursales</a></li>
       
                <li><a href="/nosotros">Nosotros</a></li>
                <li><a href="/contacto">Contacto</a></li>
              </ul>
            </div>
    
           
           

              <div class="col-md-3 header-right sign-gd footer-bottom">  
               <h4>Redes sociales</h4>
          <ul>
          
              <li><a class="fb" href="#"></a></li>
              <li><a class="twi" href="#"></a></li>
              <li><a class="insta" href="#"></a></li>
              <li><a class="you" href="#"></a></li>
          </ul>
      </div>
           
      	{/* <div class="col-md-4 sign-gd flickr-post">
              <h4>Primeros post</h4>
              <ul>
                <li><a href="single.html"><img src="images/b15.jpg" alt=" " class="img-responsive" /></a></li>
                <li><a href="single.html"><img src="images/b16.jpg" alt=" " class="img-responsive" /></a></li>
                <li><a href="single.html"><img src="images/b17.jpg" alt=" " class="img-responsive" /></a></li>
                <li><a href="single.html"><img src="images/b18.jpg" alt=" " class="img-responsive" /></a></li>
                <li><a href="single.html"><img src="images/b15.jpg" alt=" " class="img-responsive" /></a></li>
                <li><a href="single.html"><img src="images/b16.jpg" alt=" " class="img-responsive" /></a></li>
                <li><a href="single.html"><img src="images/b17.jpg" alt=" " class="img-responsive" /></a></li>
                <li><a href="single.html"><img src="images/b18.jpg" alt=" " class="img-responsive" /></a></li>
                <li><a href="single.html"><img src="images/b15.jpg" alt=" " class="img-responsive" /></a></li>
              </ul>
            </div>  */}
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="clearfix"></div>
        <p class="copy-right">©Todos los derechos reservados a smartshop | Desarrollado por <a href="#">Carivelo</a> |<a href=""> Aviso de privacidad</a></p>
      </div>
    </div>  
        </div>
    );
}

export default Footer;