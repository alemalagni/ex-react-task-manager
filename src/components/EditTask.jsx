export default function EditTask({ show, task }) {

    const handleEditSubmit = (e) => {
        e.preventDefault();
        console.log("Modifica salvata per task id:", task.id);
        console.log(task)
    }

    function controlTitle(title) {
        const errorTitle = document.querySelector(".errorTitle");
        const errorTitle2 = document.querySelector(".errorTitle2");
        const button = document.querySelector(".SaveEdit");
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

    if (!show) return null;

    return (
        <div>
            <h2>Modifica Task</h2>
            <form onSubmit={handleEditSubmit}>
                <label>
                    Titolo:
                    <input type="text"
                        name="title"
                        value={task.title}
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
                    Stato:
                    <select name="status"
                        value={task.status}>
                        <option value="To do">Da Fare</option>
                        <option value="Doing">In Corso</option>
                        <option value="Done">Fatto</option>
                    </select>
                </label>
                <label>
                    Descrizione:
                    <textarea name="description"
                        value={task.description}
                    ></textarea>
                </label>
                <button type="submit" className="SaveEdit">Salva Modifiche</button>
            </form>
        </div>
    )
}