import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import NavLogin from './NavLogin';
import ProductSearchBar from './ProductSearchBar';

export default function AppNavbar(props) {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <LinkContainer exact to="/home">
                <Navbar.Brand className="mr-auto" href="/home">{props.name}</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <LinkContainer exact to="/home">
                    <Nav.Link href="/home">Home</Nav.Link>
                </LinkContainer>
                <LinkContainer exact to="/products">
                    <Nav.Link href="/products">Shop</Nav.Link>
                </LinkContainer>
            </Nav>
            <ProductSearchBar />
            <NavLogin />
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}