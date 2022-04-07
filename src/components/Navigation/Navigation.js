import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../api";

function Navigation (props) {
    
    const {logged, isLogged} = props

    const Logout= () => {
        logout();
        window.location.reload();
        isLogged(false);
    }

    if (logged) {
        return (
            <nav>
              <Link style={{ color: 'white'}} to="/auth/login" onClick={Logout}>Logout</Link> 
            </nav>
            )
    }
}


export default Navigation