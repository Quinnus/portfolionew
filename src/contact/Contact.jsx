import {useState} from "react";
import ContactForm from "./ContactForm.jsx";
import ConfirmationMessage from "./ConfirmationMessage.jsx";
import {FaGithub} from "react-icons/fa6";
import {FaLinkedin} from "react-icons/fa6";
import {FaEnvelope} from "react-icons/fa6";
import {FaSquareWhatsapp} from "react-icons/fa6";
import {FaSquarePhone} from "react-icons/fa6";
import './Contact.css'


export default function Contact() {
    const [contactFormVisible, setContactFormVisible] = useState(false);
    const [confirmMessageFormVisible, setConfirmMessageVisible] = useState(false);


    // function handleSendMessageClick() {
    //     setContactFormVisible(true);
    // }

    function handleSubmitMessage() {
        //need some logic here to check all fields are complete before submitting
        //if(all ok) then continue
        setContactFormVisible(false)
        setConfirmMessageVisible(true);
    }

    function handleMessageOK() {
        setConfirmMessageVisible(false);
    }


    return (
        <section id="contact">
            <div className="container">
                <h2>Get in touch</h2>
                <h3>John Does Web - full stack development</h3>
                <div className="social-icons">
                    <div className="contact-item">
                        <FaSquarePhone className="social-icon"/><span className="contact-tt">+353 (0)8X XXX XXXX</span>
                    </div>
                    <div className="contact-item">
                        <FaEnvelope className="social-icon"/><span className="contact-tt">john@wec.com</span>
                    </div>
                    <div className="contact-item">
                        <FaSquareWhatsapp className="social-icon"/><span
                        className="contact-tt">+353 (0)8X XXX XXXX</span>
                    </div>
                    <div className="contact-item">
                        <FaGithub className="social-icon"/><span
                        className="contact-tt">https://johns-github-repo.com</span>
                    </div>
                    <div className="contact-item">
                        <FaLinkedin className="social-icon"/><span
                        className="contact-tt">https://johns-linkedin.com</span>
                    </div>

                </div>
                <div className="send-message">
                    <button className="message-button">Send a message</button>
                </div>
            </div>
            {contactFormVisible && <ContactForm
                handleSubmitMessage={handleSubmitMessage}
            />}
            {confirmMessageFormVisible && <ConfirmationMessage
                handleMessageOK={handleMessageOK}
            />}

        </section>
    )

}