import React from 'react';
import './footer.css';
import avisoLegal from '../../assets/documents/AvisoLegal.pdf';
import politicaDeCookies from '../../assets/documents/PoliticaDeCookies.pdf';
import politicaDeCalidad from '../../assets/documents/PoliticaDeCalidad.pdf';

export const Footer = () => {

  const handleDocumentClickAvisoLegal = () => {
    window.open(avisoLegal, '_blank');
  };

  const handleDocumentClickPoliticaDeCookies = () => {
    window.open(politicaDeCookies, '_blank');
  };

  const handleDocumentClickPoliticaDeCalidad = () => {
    window.open(politicaDeCalidad, '_blank');
  };

  return (
    <>
      <div className='Footer-container'>

            <a className='footer-enlace' onClick={handleDocumentClickAvisoLegal} >
              AVISO LEGAL
            </a>

            <div> | </div>

            <a className='footer-enlace' onClick={handleDocumentClickPoliticaDeCookies} >
              POLÍTICAS DE COOKIES
            </a>

            <div> | </div>

            <a className='footer-enlace' onClick={handleDocumentClickPoliticaDeCalidad} >
              POLÍTICAS DE CALIDAD
            </a>

      </div>
    </>
  )
}
