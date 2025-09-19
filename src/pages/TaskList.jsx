import { useGlobalContext } from "../components/GlobalContext";

export default function TaskList() {
    const { tasks } = useGlobalContext();

    console.log(tasks);

    return (
        <div>
            <div>
                <h1>Tasks:</h1>
                <ul>
                    {Array.isArray(tasks) && tasks.length > 0 ? (
                        tasks.map(t => <li key={t.id}>{t.title}</li>)
                    ) : (
                        <li>Nessun task disponibile</li>
                    )}
                </ul>
            </div>
        </div>
    )
}