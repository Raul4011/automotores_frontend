import React from "react";
import Header from "../components/Header";
import { Form, Button } from "react-bootstrap";
import "../Css/Formulario.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Contacto = () => {
  const BASE_URL = "http://localhost:8000/consultas/";

    let tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    const FechaHoy = hoy.toLocaleDateString();
    

  const [lista, setLista] = useState([]);
  const [nomyape, setNomyape] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ciudad, setCiudad] = useState("");

  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let consult = axios.post(BASE_URL, {
      nomyape:nomyape,
      email:email,
      telefono:telefono,
      ciudad:ciudad,
      fechaConsulta: FechaHoy,
      descripcion: descripcion,
    }).then(resp=>{
        setLista([...lista, resp.data])
        console.log(lista)
       
    });

    if (consult) {
        alert('Nos contactaremos contigo a la Brevedad')
    }
    e.target.reset();
  };

  const getConsultas = () => {
    axios.get(BASE_URL).then((resp) => {
      setLista(resp.data);
    });
  };

  useEffect(() => {
    getConsultas();
  }, []);

  

  return (
    <>
      <Header />
      <div className="div1">
        <br />
        <br />
        <br />
        <br />
        <div className="row py-5 formulario editVehiculo">
          <div className="col-12 text-center formulario">
            <h2>Formulario de contacto</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <label>Nombre y Apellido</label>
                <Form.Control
                  type="text"
                  placeholder=""
                  className="form1"
                  required
                  onChange={(e) => setNomyape(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder=""
                  className="form1"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder=""
                  className="form1"
                  required
                  onChange={(e) => setTelefono(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  className="form1"
                  onChange={(e) => setCiudad(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Consulta</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={7}
                  className="form1"
                  required
                  onChange={(e) => setDescripcion(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Hacer Consulta
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacto;
