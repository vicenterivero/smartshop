import React from 'react';

function FormularioContacto() {
    return (
        <div>
          <div>
          <section>
            <form className="formulario_raul">
                <fieldset>
                    <legend>Contáctanos llenando todos los campos</legend>
                    <div className="contenedor-campos_raul">
                        <div className="campo">
                            <label for="">Nombre</label>
                            <input className="input-text_raul" type="text" placeholder="Nombre"/>
                        </div>

                        <div className="campo">
                            <label for="">Teléfono</label>
                            <input className="input-text_raul" type="tel" placeholder="Teléfono"/>
                        </div>

                        <div className="campo">
                            <label for="">Correo</label>
                            <input className="input-text_raul" type="email" placeholder="Correo"/>
                        </div>

                        <div className="campo">
                            <label for="">Mensaje</label>
                            <textarea className="input-text_raul" name="" id="" cols="30" rows="10"></textarea>
                        </div>
                    </div>

                    <div className="alinear-derecha flex_raul">
                        <input className="boton_raul w-sm-100" type="submit" value="Enviar"/>
                    </div>
                </fieldset>
            </form>
        </section>
          </div>
        </div>  
    );
}

export default FormularioContacto;