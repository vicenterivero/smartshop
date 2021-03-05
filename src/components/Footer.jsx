import React from 'react';

function Footer() {
    return (
        <div>
          <div class="footer">
      <div class="container">
        <div class="col-md-3 footer-left">
          <h2><a href="index.html"><img src="images/logo3.jpg" alt=" " /></a></h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis quibusdam quia, laboriosam totam ea, nihil quis doloremque incidunt, officia qui cumque. Id, optio! Commodi accusantium sit repellendus ab facilis dicta!</p>
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
              <h4>Información</h4>
              <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/departamentos">Departamentos</a></li>
                <li><a href="/sucursales">Sucursales</a></li>
                <li><a href="/mi-lista">Mi lista</a></li>
                <li><a href="/nosotros">Nosotros</a></li>
                            <li><a href="/login">Inicio de sesión</a></li>
                            <li><a href="/register">Registro</a></li>
              </ul>
            </div>
    
            <div class="col-md-4 sign-gd-two">
              <h4>Contacto</h4>
              <ul>
    
                <li><i class="glyphicon glyphicon-envelope" aria-hidden="true"></i>Email : <a href="mailto:info@example.com">info@smartshop.com</a></li>
                <li><i class="glyphicon glyphicon-earphone" aria-hidden="true"></i>Teléfono: 999 812 3124</li>
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
        <p class="copy-right">Todos los derechos reservados a smartshop | Desarrollado por <a href="http://w3layouts.com/">Carivelo</a></p>
      </div>
    </div>  
        </div>
    );
}

export default Footer;