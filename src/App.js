import React from 'react';   
import TarjetaPresentacionProps from './Componentes/TarjetaPresentacionProps.tsx';

const App = () => {   
  const informacion = [  
    { id: 1, nombre: 'Luis Solórzano', ocupacion: 'Comerciante', pais: 'Honduras' },  
    { id: 2, nombre: 'Alejandra Luna', ocupacion: 'Veterinaria', pais: 'Guatemala' },  
    { id: 3, nombre: 'Willian Amaya', ocupacion: 'Florista', pais: 'El Salvador' },  
    { id: 4, nombre: 'Mario Rivera', ocupacion: 'Arquitecto', pais: 'Costa Rica' },  
  ];  

  return (  
    <div className="App">
      <header className="App-header">
        <div style={styles.container}>  
          <h1>Tarjetas de Presentación</h1>  
          <div style={styles.tarjetasContainer}>  
           {informacion.map(informacion => (  
              
              <TarjetaPresentacionProps   
                key={informacion.id}   
                nombre={informacion.nombre}   
                ocupacion={informacion.ocupacion}   
                pais={informacion.pais}   
              />  
           ))}
          </div>  
        </div>  
      </header>
    </div>
  );  
};  

const styles = {  
  container: {  
    display: 'flex',  
    flexDirection: 'column',  
    alignItems: 'center',  
    padding: '20px',  
  },  
  tarjetasContainer: {  
    display: 'flex',  
    flexWrap: 'wrap',  
    justifyContent: 'center',  
  },  

};  

export default App;