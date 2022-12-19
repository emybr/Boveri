import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  {data}  from './data';



function BasicExample() {
    return (
        <div className='container' >
            {data.map((item) => (
            <Card className='item' key={item.id} style={{ width: '18rem'} }>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title className='item'>{item.nameProduct}</Card.Title>
                    <Card.Text className='item' >
                    {item.descripcion}
                    </Card.Text>
                    <Card.Text className='item' >
                    $ {item.price}
                    </Card.Text>
                    <Button  variant="primary">Agregar al carrito</Button>
                </Card.Body>
            </Card>
            ))}
        </div>
    );
}

export default BasicExample;