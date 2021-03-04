import React,{Fragment,useState}from 'react';

function Listado(props) {
    const [numeros,setNumeros]= useState([1,2,3,4,5,6,7])
    return (
        <Fragment>
         <ul>
             {
                 numeros.map((item,index)=>
                 <li key={index}>{item}- {index}</li>
                 )
             }
         </ul>
        </Fragment>
    );
}

export default Listado;