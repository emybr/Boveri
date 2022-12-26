import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";    
import data from './data.json';





function BasicExample({}) {
    return (
        <div className='container tarjeta' >
            {data.map((data) => (
                <Card className='item' key={data.id} style={{ width: '18rem'} }>
                    <Card.Img variant="top" src={data.img} />
                    <Card.Body>
                        <Card.Title className='item'>{data.nameProduct}</Card.Title>
                        <Card.Text className='item' >
                        {data.descripcion}
                        </Card.Text>
                        <Card.Text className='item' >
                        ${data.price}
                        </Card.Text>
                        <Link to={`/productos/${data.id}`}>
                            <Button variant="primary">Detalle</Button>
                        </Link>
                    </Card.Body>
                </Card>
                
            ))}
        </div>
    );
}


export default BasicExample;