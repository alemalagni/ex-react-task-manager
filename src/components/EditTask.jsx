import { useState } from "react";
import Modal from "../components/Modal";
import "../css/EditTask.css";

export default function EditTask({ show, task }) {

    const [title, setTitle] = useState(task.title);
    const [status, setStatus] = useState(task.status);
    const [description, setDescription] = useState(task.description);
    let UpdateTask = { title, status, description };

    const [showEditModal, setShowEditModal] = useState(false);

    const handleEditSubmit = (e) => {
        e.preventDefault();
        setShowEditModal(true);
    }

    function UpdateEdit() {
        console.log("Modifica salvata per task id:", task.id);
        UpdateTask = { title: title, status: status, description: description };
        console.log(UpdateTask)
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
            <form onSubmit={handleEditSubmit}>
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
                <button type="submit" className="SaveEdit">Salva Modifiche</button>
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
        </div>
    )
}