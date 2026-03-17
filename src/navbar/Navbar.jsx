import HamburgerMenu from "./HamburgerMenu.jsx";
import {FaPersonCircleQuestion} from "react-icons/fa6";
import {FaLaptopCode} from "react-icons/fa6";
import {FaEnvelope} from "react-icons/fa6";
import {FaScrewdriverWrench} from "react-icons/fa6";

import {useState} from "react";
import './Navbar.css'


export default function Navbar() {
    const [hamburgerMenuVisible, setHamburgerMenuVisible] = useState(false);

    function handleHamburgerMenu() {
        setHamburgerMenuVisible(!hamburgerMenuVisible)
    }

    return (
        <nav className="nav-links">

            <span className="logo">&lt;JD /&gt;</span>

            <div className="dropdownmenu">
                <button className="hamburgerbutton"><HamburgerMenu handleHamburgerClick={handleHamburgerMenu}
                                                                   hamburgerMenuVisible={hamburgerMenuVisible}
                /></button>

                <ul className={hamburgerMenuVisible ? "nav-open" : "nav-closed"}>

                    <li><a href="#aboutsection"><FaPersonCircleQuestion/><span className="nav-label">About</span></a>
                    </li>
                    <li><a href="#projectssection"><FaLaptopCode/><span className="nav-label">Projects</span></a></li>
                    <li><a href="#skillssection"><FaScrewdriverWrench/><span className="nav-label">Skills</span></a>
                    </li>
                    <li><a href="#contactsection"><FaEnvelope/><span className="nav-label">Contact</span></a></li>
                    {/*<li>*/}
                    {/*    <button className="burgercloseicon" onClick={handleHamburgerMenu}><FaXmark/></button>*/}
                    {/*</li>*/}
                </ul>
            </div>

        </nav>
    )
}