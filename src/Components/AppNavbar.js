import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

export default function AppNavbar(props) {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/home">{props.name}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/link">Search Bar</Nav.Link>
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
            <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}