
import { useParams } from 'react-router-dom'
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { dataContex } from '../Productos/Contex/DataContex';


// en este componente tiene que estar la logica de agregar al carrito



const ItemDetail = ({ data }) => {
    let { id } = useParams(); // id 
    const item = data.filter(item => item.id === id)
    const { cart, setCart} = useContext(dataContex);
    const Buyproduct = (item) => {
    
    setCart([...cart, item])

    
    
    }

    
    
    

    return (
        <div className= "home_container tarjeta">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item[0].img} />
                <Card.Body>
                    <Card.Title>{item[0].nameProduct}</Card.Title>
                    <Card.Text>
                        {item[0].descripción}                
                    </Card.Text>
                    <Button onClick={()=>Buyproduct(item)} variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
        </div>
    )

}





export default ItemDetail;


