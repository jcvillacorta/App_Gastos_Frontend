import React from "react";
import './Button.css';


function Button(props) {

const {className, children, onClick} = props;

return (
<button 
    onClick={onClick}
    className={`btn ${className}`}>
       {children}
</button>
)
}

export default Button;
