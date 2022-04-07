import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import { login } from "../../api";

function Login (props) {
    
        const {setToken, setName, isLogged} = props
        const [email, setEmail] = useState ('');
        const [password, setPassword] = useState ('');
        const navigate = useNavigate();
    
        const makeLogin = ()=> {
            login(email, password)
            .then((res)=>{
                const user = res.data;
                setToken(user.token);
                setName(user.name);
                isLogged(true);
                navigate('/');
            })
            .catch((err)=>{
                console.error(err);
            })}
     

    return (
    <div>
      <h2 style={{ color: 'white' }}>Iniciar sesión</h2>
      <div className='auth-view__input-container'>
        <TextInput 
          value={email} 
          type="email" 
          placeholder="Ingresa tu correo" 
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput 
          value={password} 
          type="password" 
          placeholder="Ingresa tu contraseña" 
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button onClick={makeLogin}>Iniciar Sesión</Button>
      <Link style={{ color: 'white'}} to="/auth/signup">¿No tienes cuenta? Regístrate aquí</Link>
    </div>
    )
}

export default Login