import React from 'react'
import { useParams } from 'react-router-dom'
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



const SelectedCard = ({ data }) => {
    let { id } = useParams(); // id 
    const item = data[id - 1] // data
    console.log(item)


    return (
        <div>

            <Card className='item'  style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title className='item'>{item.nameProduct}</Card.Title>
                    <Card.Text className='item' >
                        {item.descripcion}
                    </Card.Text>
                    <Card.Text className='item' >
                        {item.descripcion2}
                    </Card.Text>
                        <Button variant="primary">comprar</Button>
                </Card.Body>
            </Card>

        </div>
    )
}





export default SelectedCard

