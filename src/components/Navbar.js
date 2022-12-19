import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import carrito from '../imagen/carrito.png';
import { Link } from "react-router-dom";
// import cardWidget from '../components/CardWidget'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to="/">
                <Navbar.Brand >boveri.</Navbar.Brand>
                </Link>
                <Link to="/productos">
                <Navbar.Brand >Productos.</Navbar.Brand>
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
                    <NavDropdown className='titulo' title="Carrito" id="collasible-nav-dropdown">
                        {/* <NavDropdown.Item href="#action/3.1">Camisas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Campera
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Buzos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Kimono
                            </NavDropdown.Item> */}
                    </NavDropdown>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;




