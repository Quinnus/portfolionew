import HamburgerMenu from "./HamburgerMenu.jsx";
import {useState} from "react";


export default function Navbar() {
    const [hamburgerMenuVisible, setHamburgerMenuVisible] = useState(false);

    function handleHamburgerMenu() {
        setHamburgerMenuVisible(!hamburgerMenuVisible)
    }

    return (
        <nav className="nav-links">
            <HamburgerMenu handleHamburgerClick={handleHamburgerMenu}/>
            {hamburgerMenuVisible && (
                <ul>
                    <li><a href="#aboutsection">About</a></li>
                    <li><a href="#projectssection">Projects</a></li>
                    <li><a href="#skillssection">Skills</a></li>
                    <li><a href="#contactsection">Contact</a></li>
                </ul>
            )}
        </nav>
    )
}