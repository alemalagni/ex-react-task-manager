import { memo } from "react";

function TaskRow({ task }) {
    return (
        (<tr key={task.id}>
            <td>{task.title}</td>
            <td className={` ${task.status} `}>{task.status}</td>
            <td>{new Date(task.createdAt).toLocaleDateString() + " " + new Date(task.createdAt).toLocaleTimeString()}</td>
        </tr>)
    );
}

export default memo(TaskRow);