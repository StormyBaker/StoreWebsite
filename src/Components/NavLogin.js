import { NavDropdown } from 'react-bootstrap';
import { useState } from "react"
import { useAccount } from "../DataAPI/CTXProvider";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import { LinkContainer } from 'react-router-bootstrap';

export default function NavLogin() {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    var { accountInfo, setAccInfo } = useAccount();

    function logout() {
        setAccInfo({loggedIn: false});
    }

    if (!accountInfo.loggedIn) {
        return (
            <div>
                <span className="login-btn" onClick={() => { setShowLogin(true) }}>Login</span>

                <LoginModal show={showLogin} close={() => { setShowLogin(false)}} register={() => {
                    setShowLogin(false);
                    setShowRegister(true);
                }}/>

                <RegisterModal show={showRegister} close={() => { setShowRegister(false) }} login={() => {
                    setShowRegister(false);
                    setShowLogin(true);
                }}/>
            </div>
        )
    } else {
        return(
            <NavDropdown title={accountInfo.First_Name} id="account-dropdown-out">
                <LinkContainer exact to="/account">
                    <NavDropdown.Item href="/account">My Account</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer exact to="/list">
                    <NavDropdown.Item href="/list">View List</NavDropdown.Item>
                </LinkContainer>
                {
                    (accountInfo.Admin.data[0] === 1)
                    ?
                    <>
                        <hr/>
                        <LinkContainer exact to="/admin/demand">
                            <NavDropdown.Item href="/admin/demand">Product Demand</NavDropdown.Item>
                        </LinkContainer>
                    </>
                    : <></>
                }

                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
            </NavDropdown>
        )
    }
}