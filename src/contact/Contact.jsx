import {useState} from "react";
import ContactForm from "./ContactForm.jsx";
import ConfirmationMessage from "./ConfirmationMessage.jsx";
import {FaGithub} from "react-icons/fa6";
import {FaLinkedin} from "react-icons/fa6";

export default function Contact() {
    const [contactFormVisible, setContactFormVisible] = useState(false);
    const [confirmMessageFormVisible, setConfirmMessageVisible] = useState(false);


    function handleSendMessageClick() {
        setContactFormVisible(true);
    }

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
            <h2>Get in touch</h2>
            <p>My Full name</p>
            <p>My email & phone number</p>
            <img src={<FaGithub/>} alt="github icon"/>
            <img src={<FaLinkedin/>} alt="linkedin icon"/>

            <button onClick={handleSendMessageClick}>Send a message icon</button>
            {contactFormVisible && <ContactForm
                handleSubmitMessage={handleSubmitMessage}
            />}
            {confirmMessageFormVisible && <ConfirmationMessage
                handleMessageOK={handleMessageOK}
            />}
        </section>
    )

}