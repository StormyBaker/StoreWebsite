import { useState } from "react"
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

export default function NavLogin() {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

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
}