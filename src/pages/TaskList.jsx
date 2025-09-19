import React from "react";
import { useGlobalContext } from "../components/GlobalContext";
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
                            <th>Descrizione</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map(t =>
                            <tr key={t.id}>
                                <td>{t.title}</td>
                                <td>{t.description}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}