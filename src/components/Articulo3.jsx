import React from 'react'
import { IoLogoWhatsapp,IoCall } from "react-icons/io5";
import '../Css/Icons.css'

const Articulo3 = () => {
  return (
    <>
    <div className="row py-5 px-2">
		<div className="col-12 col-sm-12 col-md-12 col-lg-4 text-center">
			<div className="telefono-cont">
				<div className="icono">
					<a href="https://web.whatsapp.com/send?phone=5493512025583" className="icon" target="_blank">
						
							<IoLogoWhatsapp className='icon3'/>
						
					</a>
				</div>
				<div className="datos text-left">
					<h4 className="mb-1">
						Consultas (Solo Whatsapp)
					</h4>
					<h3>
						351 202-5583
					</h3>
				</div>
			</div>
		</div>
		<div className="col-12 col-sm-12 col-md-12 col-lg-4 text-center">
			<div className="telefono-cont">
				<div className="icono">
					<a href="https://web.whatsapp.com/send?phone=5493516135350" className="icon" target="_blank">
						
							<IoLogoWhatsapp className='icon3'/>
						
					</a>
				</div>
				<div className="datos text-left">
					<h4 className="mb-1">
						Cobranzas (Solo Whatsapp)
					</h4>
					<h3>
						351 613-5350
					</h3>
				</div>
			</div>
		</div>
		<div className="col-12 col-sm-12 col-md-12 col-lg-4 text-center">
			<div className="telefono-cont">
				<div className="icono">
					<a href="javascript:;" className="icon">
					
							<IoCall className='icon3'/>
					
					</a>
				</div>
				<div className="datos text-left">
					<h3 className="mb-1">
						¡Llamanos!
					</h3>
					<h2>
						0810 555 0003
					</h2>
				</div>
			</div>
		</div>
	</div>
    </>
  )
}

export default Articulo3