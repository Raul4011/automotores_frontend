import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BiTrash, BiPencil } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import Header from "../components/Header";
import { ADMIN_GET_EMPLOYEES, ADMIN_REMOVE_EMPLOYEE, JWT_CARS } from "../constants/constants";
import { scrollTop } from "../utils/ScrollTopUtil";

const ListarEmpleados = () => {

    const [empleados,setEmpleados] = useState([])

    const token = localStorage.getItem(JWT_CARS)

    const getEmpleados = () =>{
        axios.get(ADMIN_GET_EMPLOYEES,{headers:{
          'Authorization': `Bearer ${token}`
        }}).then(resp=>{
            setEmpleados(resp.data)
        })
    }

    const borrarEmpleado = (id) =>{
      let eliminarEmpleado = prompt(
        "Estas seguro que quieres eliminar este Empleado si/no"
      );
      if (eliminarEmpleado==='si' || eliminarEmpleado==='S'  || eliminarEmpleado==='SI'  || eliminarEmpleado==='s') {
        let eliminar = axios.delete(ADMIN_REMOVE_EMPLOYEE + id , {headers:{
          'Authorization': `Bearer ${token}`
        }});
        if (eliminar) {
          alert("Empleado eliminado correctamente");
          axios.get(ADMIN_GET_EMPLOYEES , {headers:{
            'Authorization': `Bearer ${token}`
          }}).then((resp) => {
            setEmpleados(resp.data);
          });
        }
      }else {
        return
      }
    }
  

    useEffect(()=>{
      scrollTop()
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
              <th scope="col">Localidad y Provincia</th>
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
                  <td>{item.localidad} <br /> {item.provincia}</td>
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
                    <Link to={`/admin/empleados/ver/${item.id}`}>
                      <button className="btn btn-success">
                        <FaEye />
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