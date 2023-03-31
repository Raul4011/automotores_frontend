import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuthContext } from "../context/authContext";
import Swal from 'sweetalert2'

const Login = () => {

  const { login , jwtLogin } = useAuthContext()


  //const navigate = useNavigate()

  const BASE_URL2 = "http://localhost:8000/usuarios/";
  const BASE_URL_USERS = "http://localhost:8000/Usuarios/login"

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const Submit = async (e) => {
    e.preventDefault()

    await axios.post(BASE_URL_USERS, {
      usuario: user,
      password: pass
    })
      .then(resp => {
        Swal.fire({
          icon: 'success',
          title: 'Bienvenido JEFE',
          showConfirmButton: false,
          timer: 3000
        })
        login()
        console.log(resp.data)
        jwtLogin(resp.data.token)
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Algo Salio Mal',
          text: 'Administrador No Encontrado',
          footer: '<a href="">Intenta Nuevamente</a>'
        })

        console.log(error)
      })
    e.target.reset()
    return
    /*
    if (loginUser) {
      login()
      alert("logueado correctamente")
    }else {
      alert("credenciales incorrectas")
    }*/
    /*
   //CODIGO FUNCANDO SIN POST PARA JWT
  if (user === 'Admin' & pass === 'admin123') {
    login()
    alert('logueado correctamente')
    //navigate('/admin')
    e.target.reset()
  } else {
    alert('usuario o contraseña incorrectos intente nuevamente')
    e.target.reset()
  }
  traerUser(user)
  e.target.reset()*/



  };

  const getLogin = () => {
    axios.get(BASE_URL2).then((resp) => {
      setUsers(resp.data)
      //console.log(resp.data)
    });
    //console.log(users);
  };

  useEffect(() => {
    getLogin();
  }, []);

  return (
    <>
      <div className="container">

        <Header />
        <br />
        <br />
        <br />
        <br />
        <div className="border text-center">
          <Link to={"/"}>
            <button className="btn btn-danger">X</button>
          </Link>
          <h2 className="text-danger">Login</h2>
          <br />
          <form action="" onSubmit={Submit}>
            <input
              type="text"
              placeholder="Ingresa tu usuario"
              required
              onChange={(e) => setUser(e.target.value)}
            />
            <br /><br />
            <input
              type="password"
              placeholder="ingresa tu contraseña"
              required
              onChange={(e) => setPass(e.target.value)}
            />
            <br />
            <Link to="/register">
              <p>no estas registrado?</p>
            </Link>
            <button type="submit">Login</button>
          </form>
        </div>
        <br />
        <br />
        <Footer />
      </div>
    </>
  );
};

export default Login;
