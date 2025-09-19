import { memo } from "react";
import "../css/NavBar.css";

export default memo(function NavBar() {
    return (
        <nav className="navbar">
            <a href="/">Task List</a>
            <a href="/addTask">Add Task</a>
        </nav>
    )
})