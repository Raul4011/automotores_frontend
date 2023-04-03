import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ADMIN_GET_EMPLOYEES, ADMIN_PUT_EMPLOYEE, JWT_CARS } from "../constants/constants";
import { scrollTop } from "../utils/ScrollTopUtil";
import '../Css/EditEmpleado.css'

const EditarEmpleado = () => {
  let navigate = useNavigate()
  
  let { id } = useParams();

  const token = localStorage.getItem(JWT_CARS)

  const [nomyape, setNomyApe] = useState("");
  const [direccion, setDireccion] = useState("");
  const [localidad,setLocalidad] = useState("")
  const [provincia,setProvincia] = useState("")
  const [cuil, setCuil] = useState(0);
  const [tel, setTel] = useState("");
  const [fechaIngreso, setFechaIngreso] = useState("");
  const [fechNac, setFechaNac] = useState("");
  const [email, setEmail] = useState("");

  const getEmpleado = () => {
    axios.get(ADMIN_GET_EMPLOYEES + id ,{headers:{
      'Authorization': `Bearer ${token}`
    }}).then((resp) => {
      //console.log(resp.data)
      setNomyApe(resp.data[0].nomyape)
      setDireccion(resp.data[0].direccion)
      setLocalidad(resp.data[0].localidad)
      setProvincia(resp.data[0].provincia)
      setCuil(resp.data[0].cuil)
      setTel(resp.data[0].tel)
      setFechaIngreso(resp.data[0].fechaIngreso)
      setFechaNac(resp.data[0].fechaNac)
      setEmail(resp.data[0].email)
    });
  };

  const EditEmpleado = () => {
    let editar =  axios.put( ADMIN_PUT_EMPLOYEE + id, {
      nomyape: nomyape,
      direccion: direccion,
      localidad: localidad,
      provincia: provincia,
      cuil: cuil,
      tel: tel,
      fechaIngreso: fechaIngreso,
      fechaNac: fechNac,
      email: email,
    },{headers:{
      'Authorization': `Bearer ${token}`
    }});
    if (editar) {
      alert('se Editaron los valores correctamente')
      //axios.get()
      navigate('/admin/empleados',{ replace: true })
    }
    //window.location.assign('/admin/empleados');
  };

  useEffect(() => {
    scrollTop();
    getEmpleado();
  }, []);

  return (
    <>
      <Header />
      <div className="text-center div1">
        <br />
        <br />
        <br />
        <br />
       
        <div className="editVehiculo">
          <div className="row mt-5">
            <div className="col-6">
              <br />
              <br />
              <h2 className="text-danger">Valores a editar</h2>

            </div>
            <div className="col-6">
              <br />
              <br />
              <Link to="/admin/empleados">
                <button className="btn btn-danger">Regresar</button>
              </Link>
            </div>
          </div>
          <br />
          <form action="">
            <input
              type="text"
              value={nomyape}
              onChange={(e) => setNomyApe(e.target.value)}
              className='input1'
            />
            <label htmlFor="" className="label1">Nombre y Apellido</label>
            <br />
            <input
              type="text"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              className='input1'
            />
            <label htmlFor="" className="label1">Nueva Direccion</label>
            
            <br />
            <input
              type="text"
              value={cuil}
              onChange={(e) => setCuil(e.target.value)}
              className='input1'
            />
            <label htmlFor=""className="label1">Nuevo CUIL</label>
            <br />
            <input
              type="text"
              value={localidad}
              onChange={(e) => setLocalidad(e.target.value)}
              className='input1'
            />
            <label htmlFor=""className="label1">Nueva Localidad</label>
            <br />
            <input
              type="text"
              value={provincia}
              onChange={(e) => setProvincia(e.target.value)}
              className='input1'
            />
            <label htmlFor=""className="label1">Nueva Provincia</label>
            <br />
            <input
              type="number"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              className='input1'
            />
            <label htmlFor=""className="label1">Nuevo Telefono</label>
            <br />
            <input
              type="text"
              value={fechaIngreso}
              onChange={(e) => setFechaIngreso(e.target.value)}
              className='input1'
            />
            <label htmlFor=""className="label1">Fecha de Ingreso</label>
            <br />
            <input
              type="text"
              value={fechNac}
              onChange={(e) => setFechaNac(e.target.value)}
              className='input1'
            />
            <label htmlFor=""className="label1">Fecha de Nacimiento</label>
            <br />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='input1'
            />
            <label htmlFor=""className="label1">Nuevo Email</label>
            <br />
            <br />
            <button className="btn btn-primary" onClick={EditEmpleado}>
              editar
            </button>
            <br />
            <br />
          </form>
        </div>
        <br />
        <br />
      </div>
      <Footer />
    </>
  );
};

export default EditarEmpleado;