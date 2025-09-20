import "../css/Success.css";

function endSuccess() {
    const messageDiv = document.querySelector(".messageDiv");
    messageDiv.classList.remove("success", "error");
}

export default function Success({ success = null, response = ['Errore', 'Successo!'] }) {
    const message = response[success ? 1 : 0];
    const className = success === null ? '' : (success ? 'success' : 'error');
    return (
        <div className={`messageDiv ${className}`}>
            <p>{message}</p>
            <button onClick={endSuccess} className="okButton">Ok</button>
        </div>
    );
}
