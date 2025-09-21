import { createPortal } from 'react-dom';
import "../css/Modal.css";

export default function Modal({ title, content, show, onClose, onConfirm, confirmText = 'Conferma' }) {
    if (!show) return null;

    return createPortal(
        <div className="modalOverlay">
            <div className="modal">
                <div className="modalHeader">
                    <h2>{title}</h2>
                </div>
                <div className="modalContent">
                    {content}
                </div>
                <div className="modalActions">
                    <button className="cancelButton" onClick={onClose}>Annulla</button>
                    <button className="confirmButton" onClick={onConfirm}>{confirmText}</button>
                </div>
            </div>
        </div>,
        document.body
    )
}