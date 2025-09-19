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

                <table>
                    <thead>
                        <tr>
                            <th className="title">Titolo</th>
                            <th className="status">Stato</th>
                            <th className="createdAt">Data di Creazione</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map(t =>
                            <TaskRow key={t.id} task={t} />
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}