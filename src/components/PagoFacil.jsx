import React from 'react'
import '../Css/Pagofacil.css'


const PagoFacil = () => {
  return (
    <div className="bloque border-top bg-pago-facil">
        <div className="contenedor">
          <div className="row align-items-center py-3 py-sm-3 py-md-5 px-2 px-sm-2 px-md-0">
            <div className="separador-40"></div>
            <div className="col-12 col-sm-12 col-md-6 py-2 py-sm-3 py-md-0 wow  fadeInUp animated" data-wow-duration="1s" data-wow-delay="0.3s">
              <div className="pago-facil-contenedor">
                <div className="pago-facil-texto">
                  <h2 className="linea-titulo-1-roja font-weight-bold ">
                    Hacé el pago de tu cuota de forma ONLINE con PAGO Fácil
                  </h2>
                  <p>
                    Ahora podés hacer el pago Online con tu tarjeta de Débito mediante Pago Fácil!
                  </p>
                  <div className="PRD-boton mt-1 text-center text-sm-left">
                    <a href="https://pagosenlinea.pagofacil.com.ar/" className="btn-primary d-inline-block" target="_blank">¡PAGAR ONLINE!</a>
                  </div>
                </div>
                <a className="pago-facil-logo" href="https://pagosenlinea.pagofacil.com.ar/" target="_blank">
              
                </a>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 pt-3 pt-sm-3 pt-md-0 wow  fadeInUp animated">
              <ol className="lista-numeros-5">
                <li>
                  <div>
                    Seleccioná la Forma de Pago: <br/>
                      <strong>SIN FACTURA</strong>
                  </div>
                </li>
                <li>
                  <div>
                    Seleccioná el Producto o Servicio: <br/>
                      Buscanos como <strong>Plan X5</strong>
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Ingresá tu DNI y seguí los pasos!</strong>
                  </div>
                </li>
              </ol>
            </div>
            <div className="separador-40"></div>
          </div>
        </div>
      </div>
  )
}

export default PagoFacil