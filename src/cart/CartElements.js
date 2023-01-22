import { useContext } from 'react';
import { dataContex } from '../components/Productos/Contex/DataContex';
import './CartElements.css';
import Button from 'react-bootstrap/Button';


const CartElements = () => {
    const { cart } = useContext(dataContex);
    const { removeItem } = useContext(dataContex);

    // Agrego funcion sumar productos, restar productos y cantidad de productos

    const { sumarProductos } = useContext(dataContex);
    const { restarProductos } = useContext(dataContex);
    const { cantidadProductos } = useContext(dataContex);

    


    
    


    console.log(cart);


    return cart.map((item) => (
        <div className="ProductosCarrito">
            <img className='imgCarrito' src={item[0].img} alt="imagen" />
            <h2>{item[0].nameProduct}</h2>
            <h2>${item[0].price}</h2>

            <div>
             <Button  onClick={() => removeItem(item[0].id)} variant="outline-danger" size="sm ">Eliminar</Button>
            </div>
            {/* boton sumar y restar  productos */}
            <div>
                <Button onClick={() => sumarProductos(item[0].id)} variant="outline-success" size="sm ">+</Button>
                <Button onClick={() => restarProductos(item[0].id)} variant="outline-success" size="sm ">-</Button>
            </div>
            {/* cantidad de productos */}
            <div>
                <h2>{item[0].cantidad}</h2>
            </div>
        </div>
    ));
}

export default CartElements;

