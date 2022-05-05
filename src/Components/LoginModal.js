import { useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { LoginUser } from "../DataAPI/Account";
import { useAccount } from "../DataAPI/CTXProvider";

export default function LoginModal(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    var { setAccInfo } = useAccount();

    async function login() {
        let result = await LoginUser(email, password);

        if (result.size !== 0) {
            result.loggedIn = true;
            setAccInfo(result);
        }
    }

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
                                <Form.Control type="email" onChange={(e) => {setEmail(e.currentTarget.value)}} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" onChange={(e) => {setPassword(e.currentTarget.value)}} placeholder="Password" />
                            </Form.Group>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={login}>
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