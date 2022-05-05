import { NavDropdown } from 'react-bootstrap';
import { useState } from "react"
import { useAccount } from "../DataAPI/CTXProvider";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

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
                <span onClick={() => { setShowLogin(true) }}>Login</span>

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
                <NavDropdown.Item href="/list">View List</NavDropdown.Item>
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
            </NavDropdown>
        )
    }
}