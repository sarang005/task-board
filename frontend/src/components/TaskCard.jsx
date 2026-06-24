export default function TaskCard({ task }) {
  return (
    <div className="card">
      <h4>{task.title}</h4>
      <p>{task.description}</p>

      <span className={`badge ${task.status}`}>{task.status}</span>
    </div>
  );
}
