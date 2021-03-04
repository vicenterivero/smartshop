import React, {
    Fragment,
    useState
} from 'react';

const Contador = () => {
    const [numero,setNumero]= useState(0) // useState sirver para mantener la información del numero
    const Aumentar=()=>{
        setNumero(numero + 1)
    }
    const Reducir=()=>{
        setNumero(numero - 1)
    }
    return ( 
     <Fragment>
         <h2>Contador: {numero}</h2>
         <button onClick={Aumentar}>Aumentar</button>
         <button onClick={Reducir}>Reducir</button>
     </Fragment>
    )
}

export default Contador;