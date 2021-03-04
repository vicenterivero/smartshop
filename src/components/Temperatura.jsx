import React,{useState} from 'react';

function Temperatura() {
const [temperatura,setTemperatura]=useState(19)
const subir=()=>{
    setTemperatura(temperatura + 1)
}
const bajar=()=>{
    setTemperatura(temperatura - 1)
}

    return (
        <div>
            <h2>La temperatura es:{temperatura}</h2>
            <p>
                {
                    temperatura>21? 'hace calorcito':'hace fresquito'
                }
            </p>
            <button onClick={subir}>Subir</button>
            <button onClick={bajar}>Bajar</button>
        </div>
    );
}

export default Temperatura;