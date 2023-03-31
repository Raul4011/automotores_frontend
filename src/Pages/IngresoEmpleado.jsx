import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../Css/IngresoEmpleado.css'
import { Link,useNavigate } from 'react-router-dom'


const IngresoEmpleado = () => {

  let navigate = useNavigate();

  const BASE_URL = "http://localhost:8000/empleados/";

  const [nomyape, setNomyApe] = useState('')
  const [dir, setDir] = useState('')
  const [loc, setLoc] = useState('')
  const [prov, setProv] = useState('')
  const [cuil, setCuil] = useState('')
  const [tel, setTel] = useState('')
  const [fechaIngreso, setFechaIngreso] = useState('')
  const [fechaNac, setFechaNac] = useState('')
  const [email, setEmail] = useState('')
  const [listado,setListado]=useState([])

  const getEmpleados = () =>{
    axios.get(BASE_URL).then(resp=>{
      setListado(resp.data)
    })
   
  }

  const createEmployee = (e) => {
    e.preventDefault();
    let nuevoEmpleado = axios
      .post(BASE_URL, {
        nomyape,
        direccion:dir,
        localidad:loc,
        provincia:prov,
        cuil,
        tel,
        fechaIngreso,
        fechaNac: fechaNac,
        email
      })
      .then((resp) => {
        setListado([...listado, resp.data])
      })
    //.error((err) => console.log(err));

    if (nuevoEmpleado) {
      alert("guardado correctamente");
      getEmpleados()
      navigate("/admin/empleados");
    }else {
      alert('algo ocurrio intente nuevamente')
    }
  }

useEffect(()=>{
  getEmpleados()
},[])

  return (
    <>
      <Header />
      <div className="text-center div1">
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="IngresoEmpleado mt-2">
          <br />
          <div className="row mt-5">
            <div className="col-8">
              <h2>Ingrese Un Nuevo Empleado</h2>

            </div>
            <div className="col-4">
              <Link to="/admin/empleados" className='text-right'>
                <button className="btn btn-danger ">Regresar</button>
              </Link>
            </div>
          </div>
          <br />
          <br />
          <form onSubmit={createEmployee}>
            <input
              type="text"
              placeholder="ingresa nombre y apellido"
              onChange={(e) => setNomyApe(e.target.value)}
              className='input1'
            />
            <br />
            <input
              type="text"
              placeholder="ingrese la Direccion"
              onChange={(e) => setDir(e.target.value)}
              className='input1'
            />
            <br />
            <input
              type="text"
              placeholder="ingrese la Localidad"
              onChange={(e) => setLoc(e.target.value)}
              className='input1'
            />
            <br />
            <input
              type="text"
              placeholder="ingrese la Provincia"
              onChange={(e) => setProv(e.target.value)}
              className='input1'
            />
            <br />
            <input
              type="tel"
              placeholder="ingrese el Telefono"
              onChange={(e) => setTel(e.target.value)}
              className='input1'
            />
            <br />
            <input
              type="text"
              placeholder="ingrese el CUIL"
              onChange={(e) => setCuil(e.target.value)}
              className='input1'
            />
            <br />
            <input
              type="tel"
              placeholder="ingresa la Fecha de Ingreso"
              onChange={(e) => setFechaIngreso(e.target.value)}
              className='input1'
            />
            <br />
            <input
              type="text"
              placeholder="ingresa la Fecha de Nacimiento"
              onClick={(e) => setFechaNac(e.target.value)}
              className='input1'
            />
            <br />
            <input
              type="email"
              placeholder="ingrese el Email"
              onChange={(e) => setEmail(e.target.value)}
              className='input1'
            />
            <br />
            <br />
            <button type="submit" className='btn btn-lg btn-primary' >agregar</button>
            <br />
          </form>
          <br />
          <br />
          <br />
        </div>
        <br />
        <br />
        <br />
      </div>

      <Footer />
    </>
  )
}

export default IngresoEmpleado