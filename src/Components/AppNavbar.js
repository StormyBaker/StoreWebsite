import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import ProductSearchBar from './ProductSearchBar';

export default function AppNavbar(props) {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <LinkContainer exact to="/home">
                <Navbar.Brand href="/home">{props.name}</Navbar.Brand>
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
                <NavDropdown title="About" id="about-dropdown">
                    <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
                    <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Account (logged out)" id="account-dropdown-out">
                    <NavDropdown.Item href="/login">Log In</NavDropdown.Item>
                    <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Account (logged in)" id="account-dropdown-in">
                    <NavDropdown.Item href="/cart">My Cart</NavDropdown.Item>
                    <NavDropdown.Item href="/myaccount">My Account</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/logout">Log Out</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <ProductSearchBar />
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}