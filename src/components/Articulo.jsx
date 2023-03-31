import React from 'react'
import { FaTruckPickup, FaKey, FaMotorcycle } from "react-icons/fa";
import { IoCarSportSharp } from "react-icons/io5"
import '../Css/Icons.css'

const Articulo = () => {
    return (
        <div className="row align-items-center py-3 py-sm-3 py-md-5 px-2 px-sm-2 px-md-0">
            <div className="col-12 col-sm-12 col-md-6 py-2 py-sm-3 py-md-0 text-center">
                <FaTruckPickup className='icon2' />
                <FaKey className='icon2' />
                <FaMotorcycle className='icon2' />
                <IoCarSportSharp className='icon2' />
            </div>
            <div className="col-12 col-sm-12 col-md-6 py-2 py-sm-3 py-md-0 wow  fadeInUp animated">
                <h2 className="linea-titulo-1-roja font-weight-bold">
                    Dedicados a cumplir tus sueños
                </h2>
                <p>
                    <strong>Plan X5</strong> es una empresa especializada en el rubro automotriz con un nuevo sistema de financiación que te permite llegar al vehículo que siempre quisiste tener, de manera simple, rápida y cómoda.
                </p>
            </div>
        </div>
    )
}

export default Articulo