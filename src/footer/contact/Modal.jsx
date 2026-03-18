export default function Modal() {

    return (
        <div className="modalOverlay">
            <div className="modalBox">
                <p className="modalMessage">{}</p>
                <div className="modalButtons">
                    <button className="modalButton">Send</button>
                    <button className="modalButton">Cancel</button>
                </div>
            </div>
        </div>
    )
}