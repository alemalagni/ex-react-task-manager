import { memo } from "react";
import { Link } from "react-router-dom";
import "../css/TaskRow.css";

function TaskRow({ task }) {
    return (
        (<div key={task.id} className="tableRow">
            <div className="title"><Link to={`/task/${task.id}`}><span className="link-text">{task.title}</span></Link></div>
            <div className="status"><div className={`${task.status}`}>{task.status}</div></div>
            <div className="createdAt">{new Date(task.createdAt).toLocaleDateString()}</div>
        </div>)
    );
}

export default memo(TaskRow);