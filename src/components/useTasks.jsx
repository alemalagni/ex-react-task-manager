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

function removeTask() {
    return (console.log("Remove Task"));
}
function updateTask() {
    return (console.log("Update Task"));
}

export { useTasks, addTask, removeTask, updateTask };