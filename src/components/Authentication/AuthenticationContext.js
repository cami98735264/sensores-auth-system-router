import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import loginContext from '../../index.js';



const AuthenticationContext = ({ children }) => {
    const [requestCompleted, setRequestCompleted] = useState(false);
    const [data, setData] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/check", {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                setData(response.data);
                setRequestCompleted(true);
            } catch(err) {
                setData(err.response.data);
                setRequestCompleted(true);
                console.error(err.response.data);
            }
        }
        fetchData();
    }, []);
    return (
        <loginContext.Provider value={{isLogged: data.success, userData: data, requestCompleted }}>
        {children}
        </loginContext.Provider>
    );
}

export default AuthenticationContext;