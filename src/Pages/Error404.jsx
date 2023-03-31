import React from 'react'
import error404 from "../Assets/error404.jpg"


const Error404 = () => {
  return (
    <>
    <div className="text-center">

    <br />
    <h1>Error 404</h1>
    <h3>Pagina no Encontrada</h3>

    <br />
    <img src={error404} alt="" />
    <br />
    <br />
    <br />
    <h4>
    <a href="/">Home</a>
    </h4>
    <br />
    <br />
    <br />
    </div>
    
    </>  )
}

export default Error404