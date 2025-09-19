import { useParams } from "react-router-dom";
import { useTasks } from "../components/useTasks";
import "../css/TaskDetail.css";

export default function TaskDetail() {
    const { id } = useParams();
    const tasks = useTasks();
    const task = tasks.find(t => t.id == id);

    const handleEdit = (id) => {
        console.log("Modifica task id:", id);
    };

    const handleDelete = (id) => {
        console.log("Elimina task con ID:", id);
    };

    return (
        <>
            {task ? (
                <div>
                    <h1>{task.title}</h1>
                    <div className="taskDetails">
                        <div className="statusSection">
                            <p>Status: </p>
                            <h2 className={`${task.status}`}>{task.status}</h2>
                        </div>
                        <div>
                            <h4>Creato il:</h4>
                            <p>{new Date(task.createdAt).toLocaleDateString()}</p>
                            <p>{new Date(task.createdAt).toLocaleTimeString()}</p>
                        </div>
                    </div>
                    <div className="descriptionSection">
                        <h4>Descrizione:</h4>
                        <p>{task.description}</p>
                    </div>
                    <div className="actionButtons">
                        <button onClick={() => handleEdit(task.id)}>Modifica</button>
                        <button onClick={() => handleDelete(task.id)} className="deleteButton">Elimina</button>
                    </div>
                </div>
            ) : (
                <p>Task not found</p>
            )}
        </>
    )
}