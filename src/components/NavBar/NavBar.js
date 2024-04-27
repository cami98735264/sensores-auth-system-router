import axios from "axios";
import { useCallback, useEffect, useState } from "react";


const NavBar = ({ loginContext }) => {
    const [email, setEmail] = useState("");

    const handleLogout = useCallback(async () => {
        if(loginContext.requestCompleted && loginContext.isLogged) {
            try {
                const request = await axios.post("/api/auth/logout", {}, {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                console.log(request.data);
                window.location.href = "/login";
            } catch(err) {
                console.error(err);
            }
        }
    }, []);
    useEffect(() => {
        const setEmailMessage = () => {
            if(loginContext.requestCompleted && loginContext.isLogged) {
                setEmail(loginContext.userData.data.email);
                return;
            }
            return setEmail("No estás autorizado para ver esta información.");
        }
        setEmailMessage();
    }, [loginContext]);
    return (
            <div className="navbar bg-base-100">
              <div className="navbar-start">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 3</a></li>
                  </ul>
                </div>
                <a className="btn btn-ghost text-xl">{email}</a>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  <li><a>Item 1</a></li>
                  <li><a>Item 3</a></li>
                </ul>
              </div>
              <div className="navbar-end">
                <a className="btn" onClick={handleLogout}>Cerrar Sesión</a>
              </div>
            </div>
    );
    }


export default NavBar;