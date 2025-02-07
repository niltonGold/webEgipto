import React from 'react';
import './contacto.css';

export const Contacto = () => {

  const handleClickDisfras = () => {
    window.open("https://es.dhgate.com/product/cosplay-sexy-halloween-costume-medieval-cleopatra/913677713.html?skuId=1175981259208060982", "_blank");
  };

  const handleClickWhasap = () => {
    window.open("https://www.whatsapp.com/?lang=es_LA", "_blank");
  };

  return (
    <>
        <div className='Contacto'>

            <div className='contacto-subcontenido'>
                  <div>Si quieres ver mis atuendos has click en el siguiente enlace</div>
                  <div className='contacto-enlace' onClick={handleClickDisfras}>
                    Enlace
                  </div>
            </div>

            <div className='contacto-subcontenido'>
                  <div>Si quieres contactar conmigo escribeme</div>
                  <div className='contacto-enlace' onClick={handleClickWhasap}>
                    Enlace
                  </div>
            </div>

        </div>
    </>
  )
}
