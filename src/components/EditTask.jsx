import { useState } from "react";
import { updateTask } from "../components/useTasks";
import Success from "../components/Success";
import Modal from "../components/Modal";
import "../css/EditTask.css";

export default function EditTask({ show, task, onClose }) {

    const [title, setTitle] = useState(task.title);
    const [status, setStatus] = useState(task.status);
    const [description, setDescription] = useState(task.description);

    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteEditModal, setShowDeleteEditModal] = useState(false);

    const [success, setSuccess] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleEditSubmit = (e) => {
        e.preventDefault();
        setShowEditModal(true);
    }

    function UpdateEdit() {
        const newTask = { title: title, status: status, description: description }
        updateTask(task.id, newTask).then((response) => {
            console.log(response)
            setSuccess(response.success);
            console.log(success)
            if (!response.success) setErrorMessage(response.message)
        });
    }

    function controlTitle(title) {
        const errorTitle = document.querySelector(".errorTitle");
        const errorTitle2 = document.querySelector(".errorTitle2");
        const button = document.querySelector(".SaveEdit");
        const symbols = "!@#$%^&*()-_=+[]{}|;:'\\\",.<>?/`~";

        if (title.trim() === '') {
            setTitle(title);
            errorTitle.classList.add("active");
            button.disabled = true;
        } else {
            for (let i = 0; i < title.length; i++) {
                let char = title[i];
                if (symbols.includes(char)) {
                    errorTitle2.classList.add("active");
                    button.disabled = true;
                    break;
                } else {
                    errorTitle.classList.remove("active");
                    errorTitle2.classList.remove("active");
                    button.disabled = false;
                    setTitle(title);
                }
            }

        }
    }

    if (!show) return null;

    return (
        <div>
            <h2>Modifica Task</h2>
            <form onSubmit={handleEditSubmit} className="editForm">
                <div className="topEditSection">
                    <label>
                        <span>Titolo:</span>
                        <input type="text"
                            name="title"
                            value={title}
                            onChange={(e) => controlTitle(e.target.value)}
                        />
                    </label>
                    <div className="errorTitle">
                        <p>Il titolo non può essere vuoto</p>
                    </div>
                    <div className="errorTitle2">
                        <p>Il titolo non può contenere caratteri speciali</p>
                    </div>
                    <label>
                        <span>Stato:</span>
                        <select name="status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}>
                            <option value="To do">Da Fare</option>
                            <option value="Doing">In Corso</option>
                            <option value="Done">Fatto</option>

                        </select>
                    </label>
                </div>
                <label>
                    Descrizione:
                    <textarea name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </label>
                <div className="editButtons">
                    <button type="button" className="closeEdit" onClick={() => setShowDeleteEditModal(true)}>Cancella</button>
                    <button type="submit" className="SaveEdit">Salva</button>
                </div>
            </form>
            <Modal
                title="Modifica Task"
                content={
                    <div>
                        <p>Vuoi davvero salvare queste modifiche?</p>
                    </div>
                }
                show={showEditModal}
                onClose={() => setShowEditModal(false)}
                onConfirm={() => {
                    UpdateEdit();
                    setShowEditModal(false);
                }}
                confirmText="Salva"
                btn="edit"
            />
            <Modal
                title="Cancella Modifiche"
                content={
                    <div>
                        <p>Vuoi davvero cancellare queste modifiche?</p>
                    </div>
                }
                show={showDeleteEditModal}
                onClose={() => setShowDeleteEditModal(false)}
                onConfirm={() => {
                    setTitle(task.title);
                    setStatus(task.status);
                    setDescription(task.description);
                    setShowDeleteEditModal(false);
                    onClose();
                }}
                confirmText="Cancella"
                btn="delete"
            />
            <Success success={success} response={[`Errore aggiornamento: ${errorMessage}`, 'Task aggiornata!']} link={`/task/${task.id}`} />
        </div>
    )
}