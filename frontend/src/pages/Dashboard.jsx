import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TaskBoard from "../components/TaskBoard";

export default function Dashboard() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main">
        <Navbar />
        <TaskBoard />
      </div>
    </div>
  );
}
