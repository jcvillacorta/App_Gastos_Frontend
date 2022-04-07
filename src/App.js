import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import AmountList from "./scenes/AmountList/AmountList";
import AuthView from "./scenes/AuthView/AuthView";
import './App.css';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navigation from "./components/Navigation";

function App() {
  const [token, isToken] = useState(null);
  const [logged, isLogged] = useState (false);
  const [name, isName] = useState(null)


  return (
    <div className="app">
    <header className="app-header">
    <Navigation logged={logged} isLogged={isLogged}/>
    <Routes>
    <Route path="/" element={<AmountList token={token} name={name} />} />
    <Route path="auth" element={<AuthView setToken={isToken} setName={isName}/>}>
      <Route index element={<Login setToken={isToken} setName={isName} logged={logged} isLogged={isLogged}/>}/>
      <Route path="login" element={<Login setToken={isToken} setName={isName} logged={logged} isLogged={isLogged}/>} />
      <Route path="signup" element={<SignUp />} />
    </Route>
    </Routes>
    </header>
    </div>
  );
}

export default App;