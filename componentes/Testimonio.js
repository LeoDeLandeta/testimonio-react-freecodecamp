import React from 'react';
import '../hojas-de-estilo/Testimonio.css'
export function Testimonio(props) {
    return(
        <div className='contenedor-testimonio'>
        <img
            className='imagen-testimonio'
            src={require(`../img/testimonio-${props.imagen}.png`)}
            alt='foto de emma'
        />
          <div className='contenedor-texto-testimonio'>
            <p className='nombre-testimonio'>
             <strong> {props.nombre} </strong>
              en  
             <strong> {props.pais}</strong> 
              </p>
            <p className='cargo-testimonio'>{props.cargo} en
            <strong> {props.empresa} </strong>
             </p>
            <p className='texto-testimonio'>"{props.testimonio}"</p>
          </div>
        </div>
    );
}

