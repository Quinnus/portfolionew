import './Footer.css'
import {FaEnvelope, FaGithub, FaLinkedin, FaSquareWhatsapp} from "react-icons/fa6";
import {useState} from "react";
import Modal from "./contact/Modal.jsx";


export default function Footer() {
    const [modalIsVisible, setModalIsVisible] = useState(false);

    // Logic remains the same, applied to the <a> or <button> onClick
    function handleSendMessageClick() {
        setModalIsVisible(!modalIsVisible);
    }

    function handleCancelClick() {
        setModalIsVisible(false);
    }

    function handleMessageOkClick() {
        setModalIsVisible(false);
    }

    return (
        <footer id="social-links">
            <div className="social-icons">
                <div className="contact-item">
                    <a className="icon-button" href="https://github.com/Quinnus" target="_blank"
                       rel="noopener noreferrer">
                        <FaGithub className="social-icon"/>
                        <span className="contact-tt">Github</span>
                    </a>
                </div>

                <div className="contact-item">
                    <a className="icon-button" href="https://www.linkedin.com/in/john-quinn-dubie/" target="_blank"
                       rel="noopener noreferrer">
                        <FaLinkedin className="social-icon"/>
                        <span className="contact-tt">LinkedIn</span>
                    </a>
                </div>

                <div className="contact-item">
                    <button className="icon-button" onClick={handleSendMessageClick}>
                        <FaEnvelope className="social-icon"/>
                        <span className="contact-tt">Message</span>
                    </button>
                </div>
            </div>

            {modalIsVisible && (
                <Modal
                    handleCancelClick={handleCancelClick}
                    handleMessageOkClick={handleMessageOkClick}
                />
            )}
        </footer>
    );
}