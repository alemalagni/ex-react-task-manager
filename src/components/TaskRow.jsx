import { memo } from "react";
import { Link } from "react-router-dom";

function TaskRow({ task }) {
    console.log("Task:", task.id);
    return (
        (<tr key={task.id}>
            <td><Link to={`/task/${task.id}`}>{task.title}</Link></td>
            <td className={` ${task.status} `}>{task.status}</td>
            <td>{new Date(task.createdAt).toLocaleDateString() + " " + new Date(task.createdAt).toLocaleTimeString()}</td>
        </tr>)
    );
}

export default memo(TaskRow);