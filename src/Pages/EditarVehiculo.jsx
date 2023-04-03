import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../Css/EditVehiculo.css'
import { ADMIN_GET_VEHICULES, ADMIN_PUT_VEHICULE, JWT_CARS } from "../constants/constants";
import { scrollTop } from "../utils/ScrollTopUtil";

const EditarVehiculo = () => {


  let { id } = useParams();
  let navigate = useNavigate()
  
  const token = localStorage.getItem(JWT_CARS)

  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [anio, setAnio] = useState(null);
  const [tipo, setTipo] = useState("");
  const [motor,setMotor] =useState('')
  const [imagen, setImagen] = useState("");
  const [precioCompra, setPrecioCompra] = useState("");
  const [patente, setPatente] = useState("");
  const [color,setColor] = useState('')

  const getVehicule = () => {
    axios.get(ADMIN_GET_VEHICULES + id,{headers:{
      'Authorization': `Bearer ${token}`
    }}).then((resp) => {
      console.log(resp.data);
      setMarca(resp.data[0].marca);
      setModelo(resp.data[0].modelo)
      setAnio(resp.data[0].anio)
      setTipo(resp.data[0].tipo)
      setMotor(resp.data[0].motor)
      setImagen(resp.data[0].imagen)
      setPrecioCompra(resp.data[0].precioCompra)
      setPatente(resp.data[0].patente)
      setColor(resp.data[0].color)
    });
  };

  const EditVehiculo =  () => {

    const headers = {
      'Authorization': `Bearer ${token}`
    };

    let editar = axios.put(ADMIN_PUT_VEHICULE + id, {
      marca: marca,
      modelo: modelo,
      anio: anio,
      tipo: tipo,
      motor : motor,
      imagen: imagen,
      precioCompra: precioCompra,
      patente: patente,
      color : color
    },{headers});
    if (editar) {
      alert('se Editaron los valores correctamente')
      navigate('/admin/vehiculos/', { replace: true })
    }
    window.location.assign('/admin/vehiculos/');
  };

  useEffect(() => {
    scrollTop();
    getVehicule()
  }, []);

  return (
    <>
      <Header />
      <div className="text-center div1">
      <br />
      <br />
      <br />
        <div className="editVehiculo">
          <div className="row mt-5">
            
            <div className="col-6">
              <h2 className="text-danger">Valores a editar</h2>
            
            </div>
            <div className="col-6">
              <Link to="/admin/vehiculos">
                <button className="btn btn-danger">Regresar</button>
              </Link>
            </div>
          </div>

          <br />

          <br />
          <form >
            <input
              type="text"
              value={marca !== '' && marca}
              onChange={(e) => setMarca(e.target.value)}
            />
            <label htmlFor="">ingrese la nueva marca</label>
            <br />
            <input
              type="text"
              value={modelo !== '' && modelo}
              onChange={(e) => setModelo(e.target.value)}
            />
            <label htmlFor="">ingrese el nuevo modelo</label>
            <br />
            <input
              type="number"
              value={anio !== '' && anio}
              onChange={(e) => setAnio(e.target.value)}
            />
            <label htmlFor="">ingrese el nuevo año</label>
            <br />
            <input
              type="text"
              value={tipo !== '' && tipo}
              onChange={(e) => setTipo(e.target.value)}
            />
            <label htmlFor="">ingrese el nuevo Tipo</label>
            <br />
            <input
              type="text"
              value={motor !== '' && motor}
              onChange={(e) => setMotor(e.target.value)}
            />
            <label htmlFor="">ingrese el nuevo Motor</label>
            <br />
            <input
              type="text"
              value={imagen !== '' && imagen}
              onChange={(e) => setImagen(e.target.value)}
            />
            <label htmlFor="">ingrese la nueva Imagen</label>
            <br />
            <input
              type="text"
              value={precioCompra !== '' && precioCompra}
              onChange={(e) => setPrecioCompra(e.target.value)}
            />
            <label htmlFor="">ingrese el nuevo Precio</label>
            <br />
            <input
              type="text"
              value={patente !== '' && patente }
              onChange={(e) => setPatente(e.target.value)}
            />
            <label htmlFor="">ingrese la nueva Patente</label>
            <br />
            <input
              type="text"
              value={color !== '' && color}
              onChange={(e) => setColor(e.target.value)}
            />
            <label htmlFor="">ingrese el nuevo color</label>
            <br /><br />
            <button className="btn btn-primary" onClick={EditVehiculo}>
              editar
            </button>
            <br />
            <br />
            <br />
          </form>

        </div>
        <br />

      </div>
      <br />
      <Footer />
    </>
  );
};

export default EditarVehiculo;
