import React from 'react'
import { useParams } from 'react-router-dom'   
import Card from 'react-bootstrap/Card';





const SelectedCard = (productos) => {
    const {itemid} = useParams();
    const item = productos.productos.find((item) => item.id === item.id);

    console.log(itemid)
    
return (
    <div>
        <div className='container' >
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
                </Card.Body>
            </Card>
                
        </div>
    </div>


    
    

)
}

export default SelectedCard