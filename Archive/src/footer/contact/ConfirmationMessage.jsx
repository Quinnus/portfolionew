import './ConfirmationMessage.css'

export default function ConfirmationMessage(props) {


    return (

        <div className="confirmation">
            <p>Your message has been successfully sent</p>
            <button className="okbutton" onClick={props.handleMessageOkClick}>OK</button>
        </div>

    )

}