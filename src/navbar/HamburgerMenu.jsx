import {FaBars} from "react-icons/fa6";

export default function HamburgerMenu(props) {

    return (
        <button className="burgermenuicon" onClick={props.handleHamburgerClick}><FaBars/></button>
    )
}

