
import CartElements from './CartElements';
import CartTotal from './CartTotal';
import { useContext } from 'react';
import { dataContex } from '../components/Productos/Contex/DataContex';




    const  CartContent  =   ( )   =>   {
    const { cart } = useContext(dataContex);

    return cart.length > 0 ? (
       <> 
        <CartElements/>
        <CartTotal/>
    </>
    ) : (
        <h1>Carrito vacio</h1>
    )
}

export default CartContent;





