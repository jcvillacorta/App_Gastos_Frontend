import React from "react";
import { XOctagon } from 'react-feather';
import './Amount.css';

function Amount(props) {
    const { text, amount, onDelete } =  props;

    return (
    // <div className='amount'>
    //     <div className="amount__text">
    //     <p>{text}</p>
    //     <p>{amount}</p>
    //     </div>
    //     <div onClick={onDelete} className='amount__delete'>
    //     <Trash2 />
    //     </div>
    // </div>
    <div className= 'amount'>
        <div className="amount__text">
        {text}
        </div>
        <div className="amount__right">
        {amount}
        </div>
        <div onClick={onDelete} className='amount__delete'>
        <XOctagon />
        </div>
    </div>
    )
}

export default Amount;

// () => delTask(task._id)