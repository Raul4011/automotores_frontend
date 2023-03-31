
import { useEffect } from 'react'
import { useAuthContext } from '../context/authContext'

const Logout = () => {

    const { logout , jwtLogout } = useAuthContext()
    console.log(logout)

    useEffect(()=>{
        logout()
        jwtLogout()
    },[])
  return (
    null
  )
}

export default Logout