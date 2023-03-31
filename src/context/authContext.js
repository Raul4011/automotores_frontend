import { createContext, useCallback, useMemo , useContext } from "react";
import { useState } from "react";
import { CLAVE , JWT_CARS } from "../constants/constants";
import PropTypes from 'prop-types'

export const AuthContext = createContext()

export function AuthContextProvider  ({children}) {

    const [authenticate, setAuthenticate] = useState(localStorage.getItem(CLAVE))

    const login = useCallback(function () {
        localStorage.setItem(CLAVE,true)
        setAuthenticate(true)
    },[])

    const logout = useCallback(function () {
        localStorage.removeItem(CLAVE)
        setAuthenticate(false)
    },[])  

    const jwtLogin = useCallback(function(token){
        localStorage.setItem(JWT_CARS,token)
        console.log("este token recibo en USECONTEXT"+token);

    },[])

    const jwtLogout = useCallback(function() {
        localStorage.removeItem(JWT_CARS)
        console.log("aqui borro mi jwt");  
    },[])


    const value = useMemo(()=>({
      login,
      logout,
      jwtLogin,
      jwtLogout,
      authenticate  
    }),[login , logout , jwtLogin ,jwtLogout, authenticate])

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}   

AuthContextProvider.propTypes = {
    children : PropTypes.object
}

export function useAuthContext() {
    return useContext(AuthContext)
}


