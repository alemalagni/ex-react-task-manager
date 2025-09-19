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

function addTask() {
    return (console.log("Add Task"));
}
function removeTask() {
    return (console.log("Remove Task"));
}
function updateTask() {
    return (console.log("Update Task"));
}

export { useTasks, addTask, removeTask, updateTask };