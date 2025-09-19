export default function TaskRow({ task }) {
    return (
        <tr key={task.id}>
            <td>{task.title}</td>
            <td>{task.status}</td>
            <td>{task.createdAt}</td>
        </tr>
    );
}