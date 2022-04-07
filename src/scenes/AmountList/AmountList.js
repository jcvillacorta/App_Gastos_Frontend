import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { createAmount, fetchAmount, deleteAmount } from '../../api';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import Amount from '../../components/Amount';
import Balance from '../../components/Balance';
import './AmountList.css';

function AmountList(props) {
    const {token, name} = props // recibir el token como props

    const [amountText, setAmountText] = useState('')
    const [amountAmount, setAmountAmount] = useState('')
    const [amounts, setAmounts] = useState([])
    //const [sumAmount, setSumAmount] = useState([])
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate();

    useEffect(()=> {
      if (!token) {
        navigate("/auth")
      }
    }, [token])
    
  
    useEffect(() => {
      setLoader(true);
      fetchAmount(token)
        .then((res) => {
          setAmounts(res.data)
          setLoader(false);
        })
        .catch((err) => {
          console.error(err)
        })
    }, [])

  
    const addAmount = () => {
      createAmount(amountText, amountAmount, token)
      .then((res)=>{
          const createdAmount = res.data
          setAmounts(amounts.concat(createdAmount))
          setAmountText('')
          setAmountAmount('')
      })
      .catch((err)=>{
        console.error(err)
      })
      
    }
  
    const delAmount = (id) => {
      deleteAmount(id, token)
      .then((res)=>{
          //const deletedAmounts = res.data
          setAmounts(amounts.filter((t)=> t._id !== id))
      })
      .catch((err)=>{
        console.error(err)
      })
    }

//sumamos y lo ponemos en balance
const balance = amounts.map((amount)=> amount.amount).reduce((a, v) => a+v, 0)

//mapeamos los montos para ponerlo en un array
const mapeo= amounts.map((amount) => (amount.amount))

//calculamos ingresos

let ingresos=0
const filtradoDeIngresos = mapeo.filter((valor)=> valor > 0)

for (let i = 0; i < filtradoDeIngresos.length; i++) {
  ingresos += filtradoDeIngresos[i]
}

//calculamos egresos

let egresos=0
const filtradoDeEgresos = mapeo.filter((valor)=> valor < 0)

for (let i = 0; i < filtradoDeEgresos.length; i++) {
  egresos += filtradoDeEgresos[i]
}

 return (
    <div className='amount-list'>
        <h2>Control de Gastos, {name}</h2>
        <Balance amount={balance} ingresos={ingresos} egresos={Math.abs(egresos)} />
        <div className='amount-input__container'>
         
        <h2>Agregar nueva transacción</h2>
        <TextInput
        value={amountText} 
        placeholder='Descripción'
        onChange={(e)=> setAmountText(e.target.value)}
         />
         <TextInput
        value={amountAmount} 
        placeholder='Monto. (Negativo es Egreso, Positivo es Ingreso)'
        onChange={(e)=> setAmountAmount(e.target.value)}
         />
       <Button 
       className='amount-input__btn'
       onClick={addAmount}
       >Agregar transacción</Button>
      </div>

        {loader && (<p style={{ color: 'white' }}>Loading...</p>)}
        <h2>Historial</h2>
        <div className='historial-input__container'>
        {amounts.map((amount)=> 
        <Amount key={amount._id} text = {amount.text} amount= {amount.amount} onDelete={()=> delAmount(amount._id)}/>
        ).reverse()}
        </div>
    </div>
    )
}

export default AmountList;