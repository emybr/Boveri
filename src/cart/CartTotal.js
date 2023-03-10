import React, { useContext } from 'react'
import { dataContex } from '../components/Productos/Contex/DataContex'
import './CartTotal.css'



const CartTotal = () => {
    const { cart } = useContext(dataContex)
    const total = cart.reduce((acc, item) => acc + item[0].price, 0)
    console.log(total)



    return (
        <div className='TotalCarrito'>
            <h3>Total a pagar: ${total}</h3>
        </div>
    )
}

export default CartTotal