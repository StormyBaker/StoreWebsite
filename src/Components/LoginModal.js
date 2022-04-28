import { Button, Form, InputGroup, Modal } from "react-bootstrap";

export default function LoginModal(props) {
    return (
        <div>
            <Modal show={props.show} onHide={props.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>

                <Form>
                    <Modal.Body>
                        <p>Login to your Jarvis Foods account</p>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.close}>
                            Login
                        </Button>
                        <Button variant="primary" onClick={props.register}>
                            Register
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    )
}