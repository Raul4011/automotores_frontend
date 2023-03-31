import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../Css/IngresoAuto.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { JWT_CARS } from "../constants/constants";

const IngresoAuto = () => {
  let navigate = useNavigate();
  const BASE_URL = "http://localhost:8000/vehiculos/";
  const token = localStorage.getItem(JWT_CARS)

  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [anio, setAnio] = useState(null);
  const [tipo, setTipo] = useState("");
  const [motor, setMotor] = useState("")
  const [imagen, setImagen] = useState("");
  const [precioCompra, setPrecioCompra] = useState('');
  const [patente, setPatente] = useState("");
  const [color, setColor] = useState("");
  const [listado, setListado] = useState([])

  const getAutos = () => {
    axios.get(BASE_URL,{
      headers:{
        'Authorization': `Bearer ${token}`
      }
    }).then(resp => {
      setListado(resp.data)
    })
  }

  const createAuto = (e) => {

    const headers = {
      'Authorization': `Bearer ${token}`
    };

    e.preventDefault();
    let nuevoAuto = axios
      .post(BASE_URL, {
        marca: marca,
        modelo: modelo,
        anio: anio,
        tipo: tipo,
        motor: motor,
        imagen: imagen,
        precioCompra: precioCompra,
        patente: patente,
        color: color,
      },{headers})
      .then((resp) => {
        setListado([...listado, resp.data])
      })
    //.error((err) => console.log(err));

    if (nuevoAuto) {
      alert("guardado correctamente");
      getAutos()
      navigate("/admin/vehiculos");
    }
  };

  useEffect(() => {
    getAutos()
  }, [])


  return (
    <>
      <Header />
      <div className="text-center div1">
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="IngresoAuto mt-2">
          <br />
          <div className="row mt-5">
            <div className="col-8">
              <h2>Ingrese Un Nuevo Vehiculo</h2>
            </div>
            <div className="col-4">
              <Link to="/admin/vehiculos" className='text-right'>
                <button className="btn btn-danger ">Regresar</button>
              </Link>
            </div>
          </div>
          <br />
          <br />
          <form onSubmit={createAuto}>
            <input
              type="text"
              placeholder="ingresa la marca"
              onChange={(e) => setMarca(e.target.value)}
              className='input1'
              required
            />
            <br />
            <input
              type="text"
              placeholder="ingrese el modelo"
              onChange={(e) => setModelo(e.target.value)}
              className='input1'
              required
            />
            <br />
            <input
              type="number"
              placeholder="ingrese el año"
              onChange={(e) => setAnio(e.target.value)}
              className='input1'
              required
            />
            <br />
            <input
              type="text"
              placeholder="ingrese el tipo"
              onChange={(e) => setTipo(e.target.value)}
              className='input1'
              required
            />
            <br />
            <input
              type="text"
              placeholder="ingrese el motor"
              onChange={(e) => setMotor(e.target.value)}
              className='input1'
              required
            />
            <br />
            <input 
              type="text"
              placeholder="sube tu imagen" 
              onChange={(e) => setImagen(e.target.value)} 
              className="input1"
              />
            <br />
            <input
              type="text"
              placeholder="ingrese el precio"
              onChange={(e) => setPrecioCompra(e.target.value)}
              className='input1'
              required
            />
            <br />
            <input
              type="text"
              placeholder="ingrese la patente"
              onChange={(e) => setPatente(e.target.value)}
              className='input1'
              required
            />
            <br />
            <input
              type="text"
              placeholder="ingrese el color"
              onChange={(e) => setColor(e.target.value)}
              className='input1'
              required
            />
            <br />
            <br />
            <button type="submit" className='btn btn-lg btn-primary' >agregar</button>
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
  );
};

export default IngresoAuto;
