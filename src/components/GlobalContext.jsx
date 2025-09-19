import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export function GlobalProvider() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(`${process.env.URL}/tasks`)
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(err => console.error("Error fetching tasks:", err));
    }, []);

    return (
        <GlobalContext.Provider value={{ tasks, setTasks }}>
            {console.log(tasks)}
        </GlobalContext.Provider>
    );
}

export function useGlobalContext() {
    return useContext(GlobalContext);
}