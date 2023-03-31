import React from 'react'
import {useState,useEffect,useParams} from 'react'
import axios from 'axios'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Card,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const VerEmpleado = () => {

    const {id} = useParams()

    const BASE_URL = 'http://localhost:8000/empleados/'

    const [nomyape,setNomyApe] = useState('')
    const [dir,setDir] = useState('')
    const [cuil,setCuil] = useState('')
    const [tel,setTel] = useState('')
    const [fechaIngreso,setFechaIngreso] = useState('')
    const [fechaNac,setFechaNac] = useState('')


    const getEmpleados = () => {
        let empleado = axios.get(BASE_URL+id).then(resp=>{
            setNomyApe(resp.data[0].nomyape)
            setDir(resp.data[0].direccion)
            setCuil(resp.data[0].cuil)
            setTel(resp.data[0].tel)
            setFechaIngreso(resp.data[0].fechaIngreso)
            setFechaNac(resp.data[0].fechaNac)
        })
    }

    const scroll =() => {
      window.scrollTo({ top: 0, left: 0, behavior: undefined });
    }

    useEffect(()=>{
        scroll();
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
  )
}

export default VerEmpleado