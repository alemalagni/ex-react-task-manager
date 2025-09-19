import React from "react";
import { useGlobalContext } from "../components/GlobalContext";
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
                            <th>Titolo</th>
                            <th>Stato</th>
                            <th>Data di Creazione</th>
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