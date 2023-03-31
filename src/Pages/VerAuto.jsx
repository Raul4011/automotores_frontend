import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, Button } from "react-bootstrap";
import { JWT_CARS } from "../constants/constants";

const VerAuto = () => {
  const BASE_URL = "http://localhost:8000/vehiculos/admin";
  const { id } = useParams();
  const token = localStorage.getItem(JWT_CARS)

  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [anio, setAnio] = useState(null);
  const [tipo, setTipo] = useState("");
  const [imagen, setImagen] = useState("");
  const [precioCompra, setPrecioCompra] = useState("");
  const [patente, setPatente] = useState("");
  const [color, setColor] = useState('')
  const [motor, setMotor] = useState('')

  const getCar = () => {


    axios.get(BASE_URL + id, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((resp) => {
      setMarca(resp.data[0].marca);
      setModelo(resp.data[0].modelo);
      setAnio(resp.data[0].anio);
      setTipo(resp.data[0].tipo);
      setImagen(resp.data[0].imagen);
      setPrecioCompra(resp.data[0].precioCompra);
      setPatente(resp.data[0].patente);
      setColor(resp.data[0].color)
      setMotor(resp.data[0].motor)
    });
  };

  const scroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: undefined });
  }

  useEffect(() => {
    scroll();
    getCar();

  }, []);

  return (
    <>
      <div className="div1">
        <Header />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Card style={{ width: "40rem" }} className="m-auto">

          <Card.Img variant="top" src={imagen} />
          <Card.Body className="text-center">
            <Card.Title className="text-primary">
              {marca} {modelo}
            </Card.Title>
            <Card.Text><span className="font-weight-bold">Año: </span>{anio}</Card.Text>
            <Card.Text><span className="font-weight-bold">Tipo: </span>{tipo}</Card.Text>
            <Card.Text><span className="font-weight-bold">Motor: </span>{motor}</Card.Text>
            <Card.Text><span className="font-weight-bold">Precio: </span>{precioCompra}</Card.Text>
            <Card.Text><span className="font-weight-bold">Patente: </span>{patente}</Card.Text>
            <Card.Text><span className="font-weight-bold">Color: </span>{color}</Card.Text>
          </Card.Body>
          <Link to='/admin/vehiculos' className="text-center">
            <Button className="btn btn-block btn-success">Volver</Button>
          </Link>

        </Card>
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </>
  );
};

export default VerAuto;
