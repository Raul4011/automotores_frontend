import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BiTrash, BiPencil } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import Header from "../components/Header";

const ListarConsultas = () => {

    const BASE_URL = "http://localhost:8000/consultas/";

    const [consultas,setConsultas] = useState([])

    const getConsultas = () =>{
        axios.get(BASE_URL).then(resp=>{
            setConsultas(resp.data)
        })
    }

    const borrarConsulta = async(id) =>{
      let eliminarEmpleado = prompt(
        "Estas seguro que quieres eliminar este vehiculo si/no"
      );
      if (eliminarEmpleado==='si' || eliminarEmpleado==='S'  || eliminarEmpleado==='SI'  || eliminarEmpleado==='s') {
        let eliminar = await axios.delete(BASE_URL + id);
        if (eliminar) {
          alert("Auto eliminado correctamente");
          axios.get(BASE_URL).then((resp) => {
            setConsultas(resp.data);
          });
        }
      }else {
        return
      }
    }
    const scroll =() => {
      window.scrollTo({ top: 0, left: 0, behavior: undefined });
    }

    useEffect(()=>{
      scroll()
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