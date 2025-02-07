import React from 'react';
import './tabsContainer.css';
import { Inicio } from '../tabs/inicio/inicio';
import { Conoceme } from '../tabs/conoceme/conoceme';
import { Contacto } from '../tabs/contacto/contacto';

export const TabsContainer = ({ activeTab }) => {
  return (
    <>
      <div className='TabsContainer-container'>

        {activeTab === "inicio" && <Inicio />}
        {activeTab === "conoceme" && <Conoceme />}
        {activeTab === "contacto" && <Contacto />}

      </div>
    </>
  )
}
