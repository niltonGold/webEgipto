import React from 'react';
import './header.css';

export const Header = ({ setActiveTab }) => {
  return (
    <>
      <div className='Header-container'>

          <div className='header-titulo'>CLEOPATRA</div>
          <div className='header-botones-container'>
              <button onClick={() => setActiveTab("inicio")}>Inicio</button>
              <button onClick={() => setActiveTab("conoceme")}>Conoceme</button>
              <button onClick={() => setActiveTab("contacto")}>Contacto</button>
          </div> 
                
      </div>
    </>
  )
}
