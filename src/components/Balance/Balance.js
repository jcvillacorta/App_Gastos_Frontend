import React from "react";
import './Balance.css';

function Balance(props) {
    const { amount, ingresos, egresos } =  props;

    return (
    <div className='balance'>
        <h2>Balance: S/.{amount}</h2>
        <div className="balance-flex">
        <h3>Ingresos: S/.{ingresos}</h3>
        <h3>Egresos: S/.{egresos}</h3>
        </div>
    </div>
    )
}

export default Balance;