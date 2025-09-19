import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(`${process.env.URL}/tasks`)
            .then(res => res.json())
            .then(data => {
                setTasks(data),
                    console.log(data);
            })
            .catch(err => console.error("Error fetching tasks:", err));
    }, []);

    return (
        <GlobalContext.Provider value={{ tasks, setTasks }}>
            {children}
        </GlobalContext.Provider>
    );
}

export function useGlobalContext() {
    return useContext(GlobalContext);
}