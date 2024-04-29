
import loginContext from "../../index.js";
import { useContext, useEffect, useRef } from "react";
import { Navigate } from "react-router-dom";
import LoginHandler from "../../utils/LoginHandler/LoginHandler.js";


const Dashboard = () => {
    const userContext = useContext(loginContext);
    const { email, id, lastname, names, second_lastname, telefono } = userContext.userData.data;
    console.log(userContext);
    return (
        <LoginHandler>
            <div>
                <h1 className="text-center my-5">#{id} {"->"} ¡Bienvenido {email} ~ {telefono} | <i>{names} {lastname} {second_lastname}</i></h1>
            </div>
        </LoginHandler>
    );
    }

export default Dashboard;