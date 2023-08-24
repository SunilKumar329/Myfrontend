import Cookies from "js-cookie"
import { Route,Navigate} from "react-router"
function Protectedrout(props){
    const jwtToken=Cookies.get('jwt_token')
    // console.log(jwt_token)
    if(jwtToken===undefined){
      return <Navigate to='/login' />
}
return <Route {...props}/>
}
export default Protectedrout