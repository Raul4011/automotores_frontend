import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Card,Button} from 'react-bootstrap'
import {Link ,useParams} from 'react-router-dom'
import { ADMIN_GET_EMPLOYEES, JWT_CARS } from '../constants/constants'
import { scrollTop } from '../utils/ScrollTopUtil'

const VerEmpleado = () => {

    const {id} = useParams()
    console.log(id);

    const [nomyape,setNomyApe] = useState('')
    const [dir,setDir] = useState('')
    const [cuil,setCuil] = useState('')
    const [tel,setTel] = useState('')
    const [fechaIngreso,setFechaIngreso] = useState('')
    const [fechaNac,setFechaNac] = useState('')


    const getEmpleados = () => {

        const token = localStorage.getItem(JWT_CARS)

        axios.get(ADMIN_GET_EMPLOYEES + id, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }).then(resp=>{
            //console.log(resp.data);
            
            setNomyApe(resp.data[0].nomyape)
            setDir(resp.data[0].direccion)
            setCuil(resp.data[0].cuil)
            setTel(resp.data[0].tel)
            setFechaIngreso(resp.data[0].fechaIngreso)
            setFechaNac(resp.data[0].fechaNac)
        })
    }

    useEffect(()=>{
        scrollTop();
        getEmpleados();
    },[])

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
          
          <Card.Body className="text-center">
            <Card.Title className="text-primary">
              {nomyape} 
            </Card.Title>
            <Card.Text><span className="font-weight-bold">Direccion: </span>{dir}</Card.Text>
            <Card.Text><span className="font-weight-bold">Cuil: </span>{cuil}</Card.Text>
            <Card.Text><span className="font-weight-bold">Telefono: </span>{tel}</Card.Text>
            <Card.Text><span className="font-weight-bold">Fecha Nacimiento: </span>{fechaNac}</Card.Text>
            <Card.Text><span className="font-weight-bold">fecha Ingreso: </span>{fechaIngreso}</Card.Text>
          </Card.Body>
          <Link to='/admin/empleados' className="text-center">
            <Button className="btn btn-block btn-success">Volver</Button>
          </Link>
        </Card>
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </>
  )
}

export default VerEmpleado