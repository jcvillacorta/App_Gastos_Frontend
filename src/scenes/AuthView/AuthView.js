import './AuthView.css';
import {Outlet} from "react-router";

function AuthView() {

    return (
        <div className="auth-view">
            <Outlet />
        </div>
    )
}

export default AuthView