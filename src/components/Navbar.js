import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import carrito from '../imagen/carrito.png';
import { Link } from "react-router-dom";



function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link className='productos' to="/">
                <Navbar.Brand >boveri.</Navbar.Brand>
                </Link>
                <Link className='productos' to="/productos">
                <Navbar.Brand >Productos.</Navbar.Brand>
                </Link>
                <Link className='camisas' to="/camisas">
                <Navbar.Brand >Camisas.</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">   
                    </Nav>
                    <Navbar.Brand href="#home">
                        <img
                            src={carrito}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>   
                    <Link to={"/cart"}>
                    <Navbar.Brand >Carrito</Navbar.Brand>
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;




