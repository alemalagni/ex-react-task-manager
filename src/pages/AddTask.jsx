import { useState, useRef } from "react";
import "../css/AddTask.css";

export default function AddTask() {
    const [title, setTitle] = useState('');
    const statusRef = useRef();
    const descriptionRef = useRef();

    function controlTitle(title) {
        const errorTitle = document.querySelector(".errorTitle");
        const button = document.getElementsByTagName("button")[0];

        if (title.trim() === '') {
            errorTitle.classList.add("active");
            button.disabled = true;
        } else {
            errorTitle.classList.remove("active");
            setTitle(title);
            button.disabled = false;
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

        console.log(newTask);
    }

    return (
        <div>
            <h1>Aggiungi Task</h1>

            <form>
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
                <div>
                    <select id="status" ref={statusRef}>
                        <option value="toDo">Da Fare</option>
                        <option value="doing">In Corso</option>
                        <option value="done">Fatto</option>
                    </select>
                </div>
                <div>
                    <textarea
                        id="description"
                        placeholder="Descrizione"
                        ref={descriptionRef}
                    />
                </div>
                <button type="submit" onClick={handleSubmit}>Aggiungi Task</button>
            </form>
        </div>
    )
}