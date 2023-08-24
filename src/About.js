import Cookies from 'js-cookie';
import { Navigate} from 'react-router-dom';
function About(){
    const jwtToken=Cookies.get('access_token')
    // console.log(jwt_token)
    if(jwtToken===undefined){
      return <Navigate to='/login' />
}
    return(
        <div>
            <h1>this is about clothing this about page is under progress</h1>
        </div>
    )
}
export default About