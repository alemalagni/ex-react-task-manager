import { useState, useEffect } from "react";

function useTasks() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks`);
            const data = await response.json();
            setTasks(data);
        };

        fetchTasks();
    }, []);

    return tasks;
}

async function addTask(newTask) {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
    });
    const data = await response.json();
    console.log(data)
    return data;
}

async function removeTask(id) {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();
    console.log(data)
    return data;
}

async function updateTask(id, updatedTask) {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTask),
    });

    const data = await response.json();
    console.log("Update Task", id);
    return data;
}


export { useTasks, addTask, removeTask, updateTask };