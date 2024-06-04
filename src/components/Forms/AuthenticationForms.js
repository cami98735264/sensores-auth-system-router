import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import axios from 'axios';
import loginContext from '../../index.js';


const AuthenticationForms = ({ isLogin }) => {

    const context = useContext(loginContext);
    // Make the alert show in the center of the screen and top layer
    const cookieMessage = "Por favor acepte el uso de cookies para continuar"
    const [messageAlert, setMessageAlert] = useState(cookieMessage);
    const [previous, setPrevious] = useState("");
    useEffect(() => {
        const redirectToDashboard = () => {
            if(context.requestCompleted && context.isLogged) {
                window.location.href = "/dashboard";
                console.log("hola");
            }
        }
        redirectToDashboard();
    }, [context.requestCompleted]);
    const handleGenerarCodigo = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/auth/generate_code", { email: document.querySelector("input[name='email']").value }, {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json"
                }
            });
            // Show a message to the user that the code was sent to the email
            // check if modal is already open and if it's, don't use alert.classList.remove("hidden")
            const alert = document.getElementById('cookie-alert');
            if(alert.classList.contains("hidden")) alert.classList.remove("hidden");

            if(previous === response.data.message) return;
            setMessageAlert((previous) => {
                setPrevious(previous);
                return response.data.message;
            });
            console.log(response.data);
        } catch(err) {
            console.log(err);
            const alert = document.getElementById('cookie-alert');
            if(alert.classList.contains("hidden")) alert.classList.remove("hidden");
            setMessageAlert((previous) => {
                setPrevious(previous);
                return err.response.data.message;
            });
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const alert = document.getElementById('cookie-alert');
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        data.acceptCookies = formData.get("cookies") === "on";
        const { email, password, names, lastname, second_lastname,  acceptCookies, telefono, code } = data;
        console.log(data)
        if(!data.acceptCookies) {
            alert.classList.remove("hidden");

            if(previous === cookieMessage) return;
            setMessageAlert((previous) => {
                setPrevious(previous);
                return cookieMessage;
            });
            return;
        } else {
            alert.classList.add("hidden");
        }
        try {
            let dataToSubmit = isLogin ? { email, password, code } : { email, password, names, lastname, second_lastname, telefono, acceptCookies };
            const response = await axios.post(`/api/auth/${isLogin ? "login" : "register"}`, dataToSubmit, { 
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",

                }
            });
            console.log(response.data);
            if(!isLogin) {
                alert.classList.remove("hidden");
                if(previous === response.data.message) return;
                setMessageAlert((previous) => {
                    setPrevious(previous);
                    return response.data.message;
                });
                return;
            }
            window.location.href = "/login";
        } catch(err) {
            alert.classList.remove("hidden");
            if(previous === err.response.data.message) return;
            setMessageAlert((previous) => {
                setPrevious(previous);
                return err.response.data.message;
            });
        }

    }
    return (
  <div>
    <form className={`flex flex-col justify-center w-1/3 max-[1215px]:w-11/12 my-20 mx-auto gap-${isLogin ? "10" : "2"} border border-sky-500 p-8 rounded-lg`} onSubmit={handleSubmit}>
        <h3 className="text-center text-2xl">SUPERVISIÓN SISTEMÁTICA AGRICOLA (SSA) - {isLogin ? "Iniciar Sesión" : "¡Registrate!"}</h3>
        <div>
            <label htmlFor="email">Ingrese su email</label>
            <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                <input type="text" className="grow" placeholder="Email" name="email" required/>
            </label>
        </div>
        <div>
        <label htmlFor="password">Ingrese su contraseña</label>
            <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                <input type="password" className="grow" name="password" placeholder="Contraseña" required/>
            </label>
        </div>
        {!isLogin && (
            <>
                <div>
                    <label htmlFor="names">Ingrese su nombre</label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" className="grow" placeholder="Nombres" name='names'/>
                    </label>
                </div>
                <div>
                    <label htmlFor="lastname">Ingrese su apellido</label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" className="grow" placeholder="Primer apellido" name='lastname'/>
                    </label>
                </div>
                <div>
                    <label htmlFor='second-lastname'>Ingrese su segundo apellido</label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" className="grow" placeholder="Segundo Apellido" name='second_lastname' />
                    </label>
                </div>
                <div>
                <label htmlFor='second-lastname'>Ingrese su número telefónico</label>
                    <label className="input input-bordered flex items-center gap-2">Teléfono
                        <input type="text" className="grow" placeholder="3118984839" name='telefono'/>
                    </label>
                </div>
            </>

        )    
        }
        {isLogin && (
            /* Add an input that receives a six digit code to validate the account, and add a button next to it to regenerate the code, the url to the api route that generates it is POST /api/auth/generate_code*/
            <div>
                <label htmlFor='code'>Ingrese el código de validación</label>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="number" className="grow" placeholder="Código de validación" name='code' />
                </label>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md" onClick={handleGenerarCodigo}>Generar código</button>
            </div>

        )}
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">Acepta el uso de cookies en su navegador</span> 
                <input type="checkbox" defaultChecked name="cookies" className="checkbox checkbox-primary" />
            </label>
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md">{isLogin ? "Ingresar" : "Registrarse"}</button>
        </div>
        <a href={isLogin ? "/register" : "/login"} className='mt-6 text-blue-500'>{isLogin ? "Registrarse" : "Iniciar Sesión"}</a>
    </form>
    <div role="alert" className="alert alert-warning hidden" id='cookie-alert'>
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-5" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          <span>{messageAlert}</span>
    </div>
  </div>
)
};

export default AuthenticationForms;