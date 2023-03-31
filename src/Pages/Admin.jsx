import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import "../Css/Admin.css"
import { IoCarSport } from "react-icons/io5";
import { FaPeopleCarry, FaPowerOff } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import { motion } from "framer-motion"
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const Admin = () => {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />

      <div className="container" >
        <h2 className='text-center'>Acciones de Administrador</h2>
        <Link to='/admin/logout'>
            <button className='btn float-right LOGOUT'
                    data-tooltip-id="button-tooltip"
                    data-tooltip-content="Cerrar Sesion">{<FaPowerOff />}</button>
            <Tooltip id="button-tooltip"/>
        </Link>

        <br /><br />
        <div className='row d-flex border Administrador'>

          <div className="col-4 text-center">
            <br />
            <br />
            <h3>Listar Vehiculos</h3>
            <br />
            <Link to="/admin/vehiculos">
              <motion.button className='btn btn-success' whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}>Vehiculos</motion.button>
            </Link>
            <br />
            <IoCarSport className='icon1' />
          </div>
          <div className="col-4 text-center">
            <br />
            <br />
            <h3>Listar Empleados</h3>
            <br />
            <Link to='/admin/empleados'>
              <motion.button className='btn btn-primary' whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}>Empleados</motion.button>
            </Link>
            <br />
            <FaPeopleCarry className='icon1' />
          </div>
          <div className="col-4 text-center">
            <br />
            <br />
            <h3>Listar Consultas</h3>
            <br />
            <Link to='/admin/consultas'>
              <motion.button className='btn btn-warning text-white' whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}>Consultas</motion.button>
            </Link>
            <br />
            <GiArchiveResearch className='icon1' />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  )
}

export default Admin