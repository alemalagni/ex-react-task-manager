import { useParams } from "react-router-dom";
import { useState } from "react";
import { useTasks, removeTask } from "../components/useTasks";
import Success from "../components/Success";
import Modal from "../components/Modal";
import "../css/TaskDetail.css";

export default function TaskDetail() {
    const { id } = useParams();
    const tasks = useTasks();
    const task = tasks.find(t => t.id == id);
    const [success, setSuccess] = useState(null);

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleEdit = (id) => {
        console.log("Modifica task id:", id);
    };

    const handleDelete = (id) => {
        removeTask(id).then((response) => {
            setSuccess(response.success);
        })
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
                        <button onClick={() => setShowDeleteModal(true)} className="deleteButton">Elimina</button>
                    </div>
                    <Modal
                        title="Conferma eliminazione"
                        content={<p>Vuoi davvero eliminare questa task?</p>}
                        show={showDeleteModal}
                        onClose={() => setShowDeleteModal(false)}
                        onConfirm={() => {
                            handleDelete(task.id);
                            setShowDeleteModal(false);
                        }}
                        confirmText="Elimina"
                    />
                    <Success success={success} response={["Errore nella cancellazione della task", "Task cancellato con successo!"]} />
                </div>
            ) : (
                <p>Task not found</p>
            )}
        </>
    )
}