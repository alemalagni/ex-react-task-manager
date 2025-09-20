import { useState, useRef } from "react";
import { addTask } from "../components/useTasks.jsx";
import Success from "../components/Success.jsx";
import "../css/AddTask.css";

export default function AddTask() {
    const [title, setTitle] = useState('');
    const successMessage = ['Errore durante l\'aggiunta del task.', 'Task aggiunto con successo!'];
    const [success, setSuccess] = useState(true);
    const statusRef = useRef();
    const descriptionRef = useRef();

    function controlTitle(title) {
        const errorTitle = document.querySelector(".errorTitle");
        const errorTitle2 = document.querySelector(".errorTitle2");
        const button = document.getElementsByTagName("button")[0];
        const symbols = "!@#$%^&*()-_=+[]{}|;:'\\\",.<>?/`~";

        if (title.trim() === '') {
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
                    setTitle(title);
                    button.disabled = false;
                }
            }

        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            title,
            status: statusRef.current.value,
            description: descriptionRef.current.value,
            createdAt: new Date().toISOString(),
        };

        addTask(newTask).then((response) => {
            console.log(response);
            const fullfilled = response.success
            fullfilled ? setSuccess(true) : setSuccess(false);
        });
    }

    return (
        <div>
            <h1>Aggiungi Task</h1>

            <form onSubmit={handleSubmit}>
                <div className="formRow">
                    <div>
                        <input
                            type="text"
                            id="title"
                            placeholder="Titolo"
                            onChange={(e) => controlTitle(e.target.value)}
                        />
                    </div>
                    <div className="errorTitle">
                        <p>Il titolo non può essere vuoto</p>
                    </div>
                    <div className="errorTitle2">
                        <p>Il titolo non può contenere caratteri speciali</p>
                    </div>
                    <div>
                        <select id="status" ref={statusRef}>
                            <option value="To do">Da Fare</option>
                            <option value="Doing">In Corso</option>
                            <option value="Done">Fatto</option>
                        </select>
                    </div>
                </div>
                <div>
                    <textarea
                        id="description"
                        placeholder="Descrizione"
                        ref={descriptionRef}
                    />
                </div>
                <button type="submit">Aggiungi Task</button>
            </form>
            <Success success={success} response={successMessage} />
        </div>
    )
}