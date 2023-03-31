import React from "react";
import {useState,useEffect} from "react"
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Form,Button } from "react-bootstrap";
import "./Register.css"
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios'

const Register = () => {
  let navigate = useNavigate()

  const BASE_URL = "http://localhost:8000/usuarios/"

  const [user,setUser] = useState('')
  const [pass,setPass] = useState('')
  const [mail,setMail] = useState('')
  const [dir,setDir] = useState('')
  const [tel,setTel] = useState(null)



  const handleSubmit = (e) => {
    e.preventDefault();
    let guardar  = axios.post('http://localhost:8000/usuarios',{
      usuario : user,
      direccion : dir,
      telefono : tel,
      email : mail,
      contraseña : pass
    }).then(resp=>console.log(resp.data))
    if (guardar) {
      alert('Gracias por Crear tu Cuenta ahora Logueate')
      navigate('/Login')
    }
  }
  
  useEffect(()=>{
    axios.get(BASE_URL).then(resp=>console.log(resp.data))
  },[])

  return (
    <>
    <div className="div1">

      <Header />
      <br />
      <br />
      <br />
      <br />
      <div className="text-center border">
        <Link to={"/Login"}>
          <Button className="btn btn-danger">X</Button>
        </Link>
        <h2>Create Account</h2>
        <br />
        <Form action="" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Usuario</label>
            <input type="text" placeholder="Introduce tu nombre de usuario" required  name="nombre" onChange={(e)=>setUser(e.target.value)}/>
          </div>
          <div className="form-group">
            <label>Direccion</label>
            <input type="text" placeholder="Introduce tu direccion..." required  name="direccion" onChange={(e)=>setDir(e.target.value)}/>
          </div>
          <div className="form-group">
            <label>Telefono</label>
            <input type='tel' placeholder="Introduce tu num de Telefono..." required  name="telefono" onChange={(e)=>setTel(e.target.value)}/>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="mail" placeholder="Introduce tu email..." required  name="email" onChange={(e)=>setMail(e.target.value)}/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Introduce tu dirección..." required  name="password" onChange={(e)=>setPass(e.target.value)}/>
          </div>
          <Button className="btn btn-success" type="submit">Create Account</Button>
        </Form>
      </div>
      <br /><br /><br />
     
      
    </div>
    <Footer />
    </>
  );
};

export default Register;


