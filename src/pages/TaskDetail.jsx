import { useParams } from "react-router-dom";

export default function TaskDetail() {
    const { id } = useParams();
    console.log("Task ID:", id);

    return (
        <div>TaskDetail: {id}</div>
    )
}