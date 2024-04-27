import { useContext } from "react";
import loginContext from "../../index.js";
import { Navigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar.js";


const LoginHandler = ({ children, to }) => {
    const { requestCompleted, isLogged, userData } = useContext(loginContext);
    
    if(!requestCompleted) return;
    return (
        isLogged ? <>
        <NavBar loginContext={{ requestCompleted, isLogged, userData }}></NavBar>
        {children}
        
        </> : <Navigate to={!to ? "/login" : to} replace={true}/>
    )
    
}


export default LoginHandler;