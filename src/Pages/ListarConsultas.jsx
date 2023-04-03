import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BiTrash, BiPencil } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import Header from "../components/Header";
import { ADMIN_GET_CONSULTAS, ADMIN_REMOVE_CONSULTAS, JWT_CARS } from "../constants/constants";
import { scrollTop } from "../utils/ScrollTopUtil";

const ListarConsultas = () => {

    const token = localStorage.getItem(JWT_CARS)

    const [consultas,setConsultas] = useState([])

    const getConsultas = () =>{
        axios.get(ADMIN_GET_CONSULTAS , {headers:{
          'Authorization': `Bearer ${token}`
        }}).then(resp=>{
            setConsultas(resp.data)
        })
    }

    const borrarConsulta = async(id) =>{
      let eliminarEmpleado = prompt(
        "Estas seguro que quieres eliminar este vehiculo si/no"
      );
      if (eliminarEmpleado==='si' || eliminarEmpleado==='S'  || eliminarEmpleado==='SI'  || eliminarEmpleado==='s') {
        let eliminar = await axios.delete(ADMIN_REMOVE_CONSULTAS + id);
        if (eliminar) {
          alert("Auto eliminado correctamente");
          axios.get(ADMIN_GET_CONSULTAS).then((resp) => {
            setConsultas(resp.data);
          });
        }
      }else {
        return
      }
    }

    useEffect(()=>{
        scrollTop()
        getConsultas()
    },[])

  return (
    <>
    <div className="container">
        <Header />
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-7">
            <h2>Listado de Consultas</h2>
          </div>
          <div className="col-3">
          </div>
          <div className="col-2">
            <Link to="/admin">
              <button className="btn btn-danger">Regresar</button>
            </Link>
          </div>
        </div>
        <br />
        <table className="table text-center table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre y Apellido</th>              
              <th scope="col">Telefono</th>
              <th scope="col">Ciudad</th>
              <th scope="col">Email</th>
              <th scope="col">Fecha Consulta</th>
              <th scope="col">Descripcion</th>
            </tr>
          </thead>
          <tbody>
            {consultas.map((item) => (
              <tr>
                <>
                  <th scope="row d-flex ">{item.id}</th>
                  <td>{item.nomyape}</td>
                  <td>{item.telefono}</td>
                  <td>{item.ciudad}</td>
                  <td>{item.email}</td>
                  <td>{item.fechaConsulta}</td>
                  <td>{item.descripcion}</td>
                </>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ListarConsultas