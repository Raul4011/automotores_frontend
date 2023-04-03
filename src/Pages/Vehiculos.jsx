import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"
import '../Css/Vehiculos.css'
import { motion } from "framer-motion"
import { PUBLIC_VEHICULES } from "../constants/constants";
import { scrollTop } from "../utils/ScrollTopUtil";

const Vehiculos = () => {
  
  const [autos, setAutos] = useState([]);


  const getAutos = () => {
    axios.get(PUBLIC_VEHICULES).then((resp) => {
      setAutos(resp.data)
      //console.log(resp.data);
    });
  };

  useEffect(() => {
    scrollTop();
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
              <motion.div className="col-md-6 col-sm-12 col-xl-6 text-center " whileHover={{ scale: 1.05 }}>
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
              </motion.div>
            </>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Vehiculos;
