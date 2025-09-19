import { memo } from "react";
import { Link } from "react-router-dom";
import "../css/TaskRow.css";

function TaskRow({ task }) {
    return (
        (<tr key={task.id}>
            <td><Link to={`/task/${task.id}`}><span className="link-text">{task.title}</span></Link></td>
            <td className={`${task.status} `}>{task.status}</td>
            <td>{new Date(task.createdAt).toLocaleDateString()}</td>
        </tr>)
    );
}

export default memo(TaskRow);