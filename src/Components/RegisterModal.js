import { Button, Col, Form, Modal, Row } from "react-bootstrap";

export default function RegisterModal(props) {

    function register() {

    }

    return (
        <div>
            <Modal show={props.show} onHide={props.close} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>

                <Form>
                    <Modal.Body>
                        <p>Register your own Jarvis Foods account</p>

                            <Row>
                                <Col lg={6}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3" controlId="formDOB">
                                        <Form.Label>Date of Birth</Form.Label>
                                        <Form.Control type="text" placeholder="Date of Birth" />
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3" controlId="formFirstName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="First Name" />
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3" controlId="formLastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Last Name" />
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3" controlId="formPhone">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="text" placeholder="Phone Number" />
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>

                                    <Form.Group className="mb-3" controlId="formAddress">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control type="text" placeholder="Address" />
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                </Col>
                            </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => { register() }}>
                            Register
                        </Button>
                        <Button variant="primary" onClick={props.login}>
                            Login
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    )
}