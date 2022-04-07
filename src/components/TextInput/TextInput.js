import React from "react";
import './TextInput.css';

function TextInput(props) {

    const {className, value, placeholder, onChange, type, autoComplete} = props

    return (
    <input 
        type={type} 
        className={`text-input ${className}`}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete={autoComplete}
    />
    )
}

export default TextInput;