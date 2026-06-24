export default function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Workspace</h3>

      <ul>
        <li className="active">Dashboard</li>
        <li>My Tasks</li>
        <li>Assigned</li>
        <li>Settings</li>
      </ul>

      <div className="user-box">
        <p>Logged in</p>
      </div>
    </div>
  );
}
