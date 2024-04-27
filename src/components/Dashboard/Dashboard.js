
import loginContext from "../../index.js";
import { useContext, useEffect, useRef } from "react";
import { Navigate } from "react-router-dom";
import LoginHandler from "../../utils/LoginHandler/LoginHandler.js";


const Dashboard = () => {

    return (
        <LoginHandler>
            <div>
                <h1>Dashboard</h1>
            </div>
        </LoginHandler>
    );
    }

export default Dashboard;