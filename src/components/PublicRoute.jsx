import { Navigate, Outlet} from 'react-router-dom'
import { useAuthContext } from "../context/authContext"
import { ADMIN} from '../routes/paths'


const PublicRoute = () =>{
    const {authenticate} = useAuthContext()

    if (authenticate) {
        return <Navigate to={ADMIN}/>
    }

    return (
        <div>
            <Outlet />
        </div>
    )

}

export default PublicRoute