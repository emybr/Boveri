import { useContext } from 'react';
import { dataContex } from '../components/Productos/Contex/DataContex';
import './CartElements.css';


const CartElements = () => {
    const { cart } = useContext(dataContex);
    const { removeItem } = useContext(dataContex);


    console.log(cart);


    return cart.map((item) => (
        <div className="ProductosCarrito">
            <img className='imgCarrito' src={item[0].img} alt="imagen" />
            <h2>{item[0].nameProduct}</h2>
            <h2>${item[0].price}</h2>
            <button className='botonCarrito' onClick={() => removeItem(item[0].id)}>Eliminar</button>
        </div>
    ));
}

export default CartElements;

