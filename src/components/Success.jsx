import { Link } from "react-router-dom";
import "../css/Success.css";

function endSuccess() {
    const messageDiv = document.querySelector(".messageDiv");
    messageDiv.classList.remove("success", "error");
}

export default function Success({ success = null, response = ['Errore', 'Successo!'], link = '#' }) {
    const message = response[success ? 1 : 0];
    const className = success === null ? '' : (success ? 'success' : 'error');
    return (
        <div className={`messageDiv ${className}`}>
            <p>{message}</p>
            <a href={link}>
                <button onClick={endSuccess} className="okButton">
                    Ok
                </button>
            </a>
        </div>
    );
}
