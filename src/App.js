
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Logout from "./components/Logout";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { AuthContextProvider } from "./context/authContext";
import Admin from "./Pages/Admin";
import Contacto from "./Pages/Contacto";
import EditarEmpleado from "./Pages/EditarEmpleados";
import EditarVehiculo from "./Pages/EditarVehiculo";
import Error404 from "./Pages/Error404";
import Home from "./Pages/Home";
import IngresoAuto from "./Pages/IngresoAuto";
import IngresoEmpleado from "./Pages/IngresoEmpleado";
import ListarConsultas from "./Pages/ListarConsultas";
import ListarEmpleados from "./Pages/ListarEmpleados";
import ListarVehiculos from "./Pages/ListarVehiculos";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Vehiculos from "./Pages/Vehiculos";
import VerAuto from "./Pages/VerAuto";
import VerEmpleado from "./Pages/VerEmpleado";
import View from "./Pages/View";
import {
  ADMIN,
  ADMIN_EMPLOYEES,
  ADMIN_EMPLOYEES_CREATE,
  ADMIN_EMPLOYEES_EDIT,
  ADMIN_EMPLOYEES_VIEW,
  ADMIN_QUERIES,
  ADMIN_VEHICULOS,
  ADMIN_VEHICULOS_CREATE,
  ADMIN_VEHICULOS_EDIT,
  ADMIN_VEHICULOS_VIEW,
  CONTACTO,
  ERROR,
  HOME,
  LOGIN,
  LOGOUT,
  REGISTER,
  VEHICULO,
  VEHICULOS,
} from "./routes/paths";

function App() {
 
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path={HOME} element={<PublicRoute />}>
            <Route path={HOME} index element={<Home />} />
            <Route path={LOGIN} element={<Login/>} />
            <Route path={REGISTER} element={<Register />} />
            <Route path={VEHICULOS} element={<Vehiculos />} />
            <Route path={VEHICULO} element={<View />} />
            <Route path={CONTACTO} element={<Contacto />} />
            <Route path={ERROR} element={<Error404 />} />
          </Route> 
          <Route path={ADMIN} element={<PrivateRoute/>}>
            <Route path={ADMIN} element={<Admin />} />
            <Route path={LOGOUT} element={<Logout />}/>
            <Route path={ADMIN_VEHICULOS} element={<ListarVehiculos />} />
            <Route path={ADMIN_VEHICULOS_EDIT} element={<EditarVehiculo />} />
            <Route path={ADMIN_VEHICULOS_CREATE} element={<IngresoAuto />} />
            <Route path={ADMIN_VEHICULOS_VIEW} element={<VerAuto />} />
            <Route path={ADMIN_EMPLOYEES} element={<ListarEmpleados />} />
            <Route path={ADMIN_EMPLOYEES_CREATE} element={<IngresoEmpleado />} />
            <Route path={ADMIN_EMPLOYEES_EDIT} element={<EditarEmpleado />} />
            <Route path={ADMIN_EMPLOYEES_VIEW} element={<VerEmpleado />} />
            <Route path={ADMIN_QUERIES} element={<ListarConsultas />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
