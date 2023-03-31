import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import Header from "../components/Header";
import "./View.css";
import Footer from "../components/Footer";

const View = () => {
  const BASE_URL = "http://localhost:8000/vehiculos/";
  const { id } = useParams();

  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [anio, setAnio] = useState(null);
  const [tipo, setTipo] = useState("");
  const [imagen, setImagen] = useState("");
  const [color, setColor] = useState('')
  const [motor, setMotor] = useState('')

  const getCar = () => {
    axios.get(BASE_URL + id).then((resp) => {
      setMarca(resp.data[0].marca);
      setModelo(resp.data[0].modelo);
      setAnio(resp.data[0].anio);
      setTipo(resp.data[0].tipo);
      setImagen(resp.data[0].imagen);
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
        <Card style={{ width: "40rem" }} className="m-auto">
          <Link to={"/vehiculos"} className='text-right'>
            <Button variant="danger">Regresar</Button>
          </Link>
          <Card.Img variant="top" src={imagen} />
          <Card.Body className="text-center">
            <Card.Title>
              <span className="text-primary font-weight-bold">{marca} {modelo}</span>
            </Card.Title>
            <Card.Text><span className="font-weight-bold">Año : </span>{anio}</Card.Text>
            <Card.Text><span className="font-weight-bold">Tipo : </span>{tipo}</Card.Text>
            <Card.Text><span className="font-weight-bold">Motor : </span>{motor}</Card.Text>
            <Card.Text><span className="font-weight-bold">Color : </span>{color}</Card.Text>
          </Card.Body>
          <Button className="btn btn-success">
            <a href="https://api.whatsapp.com/send/?phone=5493512025583&text=Hola+%2APlan%20X5%2A+...&type=phone_number&app_absent=0" className="text-white"
              target="_blank" rel="noreferrer">
              <span className="">Consultar!</span>
            </a>
          </Button>
        </Card>
        <br />
        <br />

      </div>
      <Footer />
    </>
  );
};

export default View;
