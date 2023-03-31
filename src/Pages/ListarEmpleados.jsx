import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BiTrash, BiPencil } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import Header from "../components/Header";

const ListarEmpleados = () => {

    const BASE_URL = "http://localhost:8000/empleados/";

    const [empleados,setEmpleados] = useState([])

    const getEmpleados = () =>{
        axios.get(BASE_URL).then(resp=>{
            setEmpleados(resp.data)
        })
    }

    const borrarEmpleado = async(id) =>{
      let eliminarEmpleado = prompt(
        "Estas seguro que quieres eliminar este vehiculo si/no"
      );
      if (eliminarEmpleado==='si' || eliminarEmpleado==='S'  || eliminarEmpleado==='SI'  || eliminarEmpleado==='s') {
        let eliminar = await axios.delete(BASE_URL + id);
        if (eliminar) {
          alert("Auto eliminado correctamente");
          axios.get(BASE_URL).then((resp) => {
            setEmpleados(resp.data);
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
        getEmpleados()
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
            <h2 className="text-danger">Listado de Empleados</h2>
          </div>
          <div className="col-3">
            <Link to="/admin/empleados/agregar">
              <button className="btn btn-primary">Agregar</button>
            </Link>
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
              <th scope="col">Direccion</th>
              <th scope="col">Cuil</th>
              <th scope="col">Telefono</th>
              <th scope="col">Fecha Ingreso</th>
              <th scope="col">Fecha Nac</th>
              <th scope="col">E-mail</th>
              <th scope="col">Acciones</th>
             
            </tr>
          </thead>
          <tbody>
            
            {empleados.map((item) => (
              <tr>
                <>
                  <th scope="row d-flex ">{item.id}</th>
                  <td>{item.nomyape}</td>
                  <td>{item.direccion}</td>
                  <td>{item.cuil}</td>
                  <td>{item.tel}</td>
                  <td>{item.fechaIngreso}</td>
                  <td>{item.fechaNac}</td>
                  <td>{item.email}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => borrarEmpleado(item.id)}
                    >
                      <BiTrash />
                    </button>
                    <Link to={`/admin/empleados/editar/${item.id}`}>
                      <button className="btn btn-warning">
                        <BiPencil />
                      </button>
                    </Link>
                    
                  </td>
                </>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ListarEmpleados