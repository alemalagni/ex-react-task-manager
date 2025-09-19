import { useGlobalContext } from "../context/GlobalContext";

import TaskRow from "../components/TaskRow";
import "../css/TaskList.css";

export default function TaskList() {
    const { tasks } = useGlobalContext();

    console.log(tasks);

    return (
        <div>
            <div>
                <h1>Tasks:</h1>

                <div className="taskList">
                    <div className="rowHeader">
                        <div className="title">Titolo</div>
                        <div className="status">Stato</div>
                        <div className="createdAt">Data di Creazione</div>
                    </div>
                    {tasks.map(t =>
                        <TaskRow key={t.id} task={t} />
                    )}
                </div>
            </div>
        </div>
    )
}