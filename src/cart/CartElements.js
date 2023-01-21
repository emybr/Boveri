import { useContext } from 'react';
import { dataContex } from '../components/Productos/Contex/DataContex';
// import { Card } from 'react-bootstrap';

import './CartElements.css';


const CartElements = () => {
    const { cart } = useContext(dataContex);
    console.log(cart);
    return cart.map((item) => (
        <div className= "ProductosCarrito">
            <img className='imgCarrito' src={item[0].img
                } alt="imagen" />
                <h2>{item[0].nameProduct}</h2>
                <h2>${item[0].price}</h2>
                <button className="btn btn-danger">Eliminar </button>
                
                
        </div>
        

    ));
}

export default CartElements;