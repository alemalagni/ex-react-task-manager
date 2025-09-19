import { createContext, useContext } from "react";
import { useTasks } from "./useTasks";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const tasks = useTasks();

    return (
        <GlobalContext.Provider value={{ tasks }}>
            {children}
        </GlobalContext.Provider>
    );
}

export function useGlobalContext() {
    return useContext(GlobalContext);
}