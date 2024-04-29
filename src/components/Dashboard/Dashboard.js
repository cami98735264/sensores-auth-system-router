
import loginContext from "../../index.js";
import { useContext, useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import LoginHandler from "../../utils/LoginHandler/LoginHandler.js";


const Dashboard = () => {
    const userContext = useContext(loginContext);
    const [data, setUserData] = useState({});
    useEffect(() => {
        if(userContext.requestCompleted && userContext.isLogged) {
            setUserData(userContext.userData.data);
        }
    }, [userContext.requestCompleted])
    console.log(userContext);
    return (
        <LoginHandler>
            <div>
                <h1 className="text-center my-5"><i>{data.length === 0 ? "Cargando..." : `#${data.id} {"->"} ¡Bienvenido ${data.email} ~ ${data.telefono} | ${data.names} ${data.lastname} ${data.second_lastname}`}</i></h1>
            </div>
        </LoginHandler>
    );
    }

export default Dashboard;