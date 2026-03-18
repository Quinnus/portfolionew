export default function ConfirmationMessage(props) {


    return (
        <div role="alert">
            <p>Your message has been sucessfully sent</p>
            <button onClick={props.handleMessageOK}>OK</button>
        </div>
    )

}