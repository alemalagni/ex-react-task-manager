import { useGlobalContext } from "../context/GlobalContext";
import { useCallback, useMemo, useState } from "react";

import TaskRow from "../components/TaskRow";
import "../css/TaskList.css";

function debounce(callback, delay) {
    let timer;
    return (value) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(value);
        }, delay);
    }
}

export default function TaskList() {
    const { tasks } = useGlobalContext();

    const [sortBy, setSortBy] = useState('createdAt');
    const [sortOrder, setSortOrder] = useState(1);
    const sortIcon = sortOrder === 1 ? '▲' : '▼';

    const [Search, setSearch] = useState('');

    const debounceSearch = useCallback(debounce(setSearch, 500), []);

    const handleSort = (field) => {
        if (sortBy === field) {
            setSortOrder(prev => prev * -1);
        } else {
            setSortBy(field);
            setSortOrder(1);
        }
    }

    const requestedTasks = useMemo(() => {
        let comparison
        console.log(tasks)

        if (sortBy === 'title') {
            comparison = (a, b) => a.title.localeCompare(b.title) * sortOrder;
        } else if (sortBy === 'status') {
            const statusOrder = ['To do', 'Doing', 'Done'];
            comparison = (a, b) => (statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status)) * sortOrder;
        } else if (sortBy === 'createdAt') {
            comparison = (a, b) => (new Date(a.createdAt) - new Date(b.createdAt)) * sortOrder;
        }

        return [...tasks]
            .filter(t => t.title.toLowerCase().includes(Search.toLowerCase()))
            .sort(comparison);

    }, [tasks, sortBy, sortOrder, Search]);

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Cerca task..."
                    onChange={(e) => debounceSearch(e.target.value)}
                />
            </div>
            <div>
                <h1>Tasks:</h1>

                <div className="taskList">
                    <div className="rowHeader">
                        <div className="title" onClick={() => handleSort('title')}>Titolo {sortBy === 'title' && sortIcon}</div>
                        <div className="status" onClick={() => handleSort('status')}>Stato {sortBy === 'status' && sortIcon}</div>
                        <div className="createdAt" onClick={() => handleSort('createdAt')}>Data di Creazione {sortBy === 'createdAt' && sortIcon}</div>
                    </div>
                    {requestedTasks.map(t =>
                        <TaskRow key={t.id} task={t} />
                    )}
                </div>
            </div>
        </div>
    )
}