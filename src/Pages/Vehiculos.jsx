import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"
import '../Css/Vehiculos.css'

const Vehiculos = () => {
  const BASE_URL = "http://localhost:8000/vehiculos/";
  const [autos, setAutos] = useState([]);


  const getAutos = () => {
    axios.get(BASE_URL).then((resp) => {
      setAutos(resp.data)
      //console.log(resp.data);
    });
  };

  const scroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: undefined });
  }

  useEffect(() => {
    scroll();
    getAutos();
  }, []);

  return (
    <>
      <Header />
      
      <br />
      <br />
      <br />
      <br />
      <h3 className="text-center text-danger">Nuestros Autos</h3>
      <br />
      <div className="container-fluid">

        <div className="row">
          {autos.map((auto) => (
            <>
              <div className="col-md-6 col-sm-12 col-xl-6 text-center ">
                <Card style={{ width: "40rem" }}>
                  <Card.Img variant="top" src={auto.imagen} className='ImagenAuto' />
                  <Card.Body>
                    <Card.Title>
                      <span className="text-primary font-weight-bold">{auto.marca} {auto.modelo}</span></Card.Title>
                    <Card.Text>
                      <span className="font-weight-bold">Año: </span>{auto.anio}
                    </Card.Text>
                    <Card.Text>
                      <span className="font-weight-bold">Tipo: </span>{auto.tipo}
                    </Card.Text>
                    <Card.Text>
                      <span className="font-weight-bold">Motor: </span>{auto.motor}
                    </Card.Text>
                    <Card.Text>
                      <span className="font-weight-bold">Color: </span>{auto.color}
                    </Card.Text>

                    <Link to={`/vehiculos/${auto.id}`}>
                      <Button variant="success" className="btn btn-block">Lo Quiero</Button>
                    </Link>
                  </Card.Body>
                </Card>
                <br /><br />
              </div>
            </>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Vehiculos;
