import { useEffect, useState } from "react";
import api from "../api/axios";
import TaskCard from "./TaskCard";

export default function TaskBoard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get("/tasks").then((res) => setTasks(res.data));
  }, []);

  return (
    <div className="board">
      {["todo", "inprogress", "done"].map((status) => (
        <div className="column" key={status}>
          <h3>{status.toUpperCase()}</h3>

          {tasks
            .filter((t) => t.status === status)
            .map((task) => (
              <TaskCard key={task._id} task={task} />
            ))}
        </div>
      ))}
    </div>
  );
}
