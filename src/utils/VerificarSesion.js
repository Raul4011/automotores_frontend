import { JWT_CARS } from "../constants/constants";

export function verificarSesion() {
    console.log('Aqui me disparo VERIFICARSESION');
    const token = localStorage.getItem(JWT_CARS);
    if (!token) {
      // Si no hay token en el localStorage, no hay nada que verificar
      return;
    }
  
    const decodedToken = JSON.parse(token);
    console.log(decodedToken);
    const expDate = new Date(decodedToken.exp * 1000); // La fecha de expiración del token en milisegundos
    const currentDate = new Date(); // La fecha actual en milisegundos
    
    if (expDate < currentDate) {
      // Si la fecha de expiración del token es menor que la fecha actual, entonces el token ha expirado
      alert('¡Tu sesión ha expirado! Por favor, inicia sesión nuevamente.');
      localStorage.removeItem(JWT_CARS); // Eliminamos el token del localStorage
    }
  }