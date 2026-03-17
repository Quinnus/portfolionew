import {FaXmark} from "react-icons/fa6";
import {FaBars} from "react-icons/fa6";

export default function HamburgerMenu(props) {

    return (
        <button onClick={props.handleHamburgerClick}>
            <img src={<FaBars/>} alt="stylised hamburgger menu dropdown"/>
            <img src={<FaXmark/>} alt="stylised close icon menu dropdown"/>

        </button>
    )
}

