export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <h2>
          <span className="logo">✓</span> Task Board
        </h2>
      </div>

      <div className="nav-center">
        <input type="text" placeholder="Search tasks..." className="search" />
      </div>

      <div className="nav-right">
        <button className="btn-primary">+ New Task</button>

        <div className="avatar">SB</div>
      </div>
    </nav>
  );
}
