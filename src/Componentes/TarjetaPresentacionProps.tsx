import React from 'react'
import { Informacion} from '../Modelos/Informacion';

export default function TarjetaPresentacionProps(props:Informacion) {
  return (
    <div style={styles.tarjeta}>  
        <ul style={styles.list}>  
            <li><h4>Nombre:</h4> {props.nombre}</li>
            <li><h4>Ocupacion:</h4> {props.ocupacion}</li>
            <li><h4>Pais:</h4> {props.pais}</li>
        </ul>
    </div>
  )
}

const styles = {  
    tarjeta: {  
      border: '1px solid #ccc',  
      borderRadius: '5px',  
      padding: '10px',  
      margin: '10px',  
      width: '200px',  
      textAlign: 'center',  
      boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)',  
    },  
    list: {  
        listStyleType: 'none',
        padding: 0,  
        margin: 0,  
      }, 
    };   
  
