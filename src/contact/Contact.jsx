import {useState} from "react";
import ContactForm from "./ContactForm.jsx";
import ConfirmationMessage from "./ConfirmationMessage.jsx";
import {FaGithub} from "react-icons/fa6";
import {FaLinkedin} from "react-icons/fa6";
import {FaEnvelope} from "react-icons/fa6";
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
        <section id="contactsection">
            <div className="container">
                <h2>Get in touch</h2>
                <p>My Full name</p>
                <p>My email & phone number</p>
                <FaGithub/>
                <FaLinkedin/>
                <FaEnvelope/>
                {contactFormVisible && <ContactForm
                    handleSubmitMessage={handleSubmitMessage}
                />}
                {confirmMessageFormVisible && <ConfirmationMessage
                    handleMessageOK={handleMessageOK}
                />}
            </div>
        </section>
    )

}