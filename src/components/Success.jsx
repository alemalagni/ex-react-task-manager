import "../css/Success.css";

function endSuccess() {
    const messageDiv = document.querySelector(".messageDiv");
    messageDiv.classList.remove("success", "error");
}

export default function Success({ success = true, response = ['Errore', 'Successo!'] }) {
    const message = response[success ? 1 : 0];

    return (
        <div className={`messageDiv ${success ? 'success' : 'error'}`}>
            <p>{message}</p>
            <button onClick={endSuccess} className="okButton">Ok</button>
        </div>
    );
}
