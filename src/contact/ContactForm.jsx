import {FaPaperPlane} from "react-icons/fa6";


export default function ContactForm(props) {


    return (

        <form id="contactform">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject"></input>
            <label htmlFor="message">Your message</label>
            <textarea id="message"></textarea>
            <label htmlFor="email">Your email</label>
            <input type="email" id="email"></input>
            <label htmlFor="phone">Your phone number</label>
            <input type="tel" id="phone" pattern="[0-9]{3}[0-9]{7}"/><br/>
            <button type="button" onClick={props.handleSubmitMessage}><FaPaperPlane/></button>
        </form>
    )

}