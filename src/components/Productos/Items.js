import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLocation } from "react-router-dom";    
import './Items.css';



function BasicExample({data}) {
    const path = useLocation();
    
    return ( 
        <div className='container tarjeta' >
            {data.map((data) => (    
                <Card className='item prueba' key={data.id} >
                    <Card.Img variant="top" src={data.img} />
                    <Card.Body>
                        <Card.Title className='item'>{data.nameProduct}</Card.Title>
                        <Card.Text className='item' >
                        ${data.price}
                        </Card.Text>
                        {path.pathname === '/productos' ? (<Link to={`/productos/${data.id}`}>
                            <Button variant="primary">Detalle</Button>
                        </Link> ) : (<Link to={`/camisas/${data.id}`}>
                            <Button variant="primary">Detalle</Button>
                            </Link> )
                            } 
                    </Card.Body>
                </Card>
                
            ))}
        </div>
    );
}


export default BasicExample;