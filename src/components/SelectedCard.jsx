import React from 'react'
import { useParams } from 'react-router-dom'
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';




const SelectedCard = ({ data }) => {
    let { id } = useParams(); // id 
    const item = data.filter(item => item.id === id)


    console.log(item)
    


    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item[0].img} />
                <Card.Body>
                    <Card.Title>{item[0].nameProduct}</Card.Title>
                    <Card.Text>
                        {item[0].descripción}
                    </Card.Text>
                    <Button variant="primary">comprar</Button>
                </Card.Body>
            </Card>
        </div>
    )
}





export default SelectedCard

