import { useEffect, useState } from "react";
import api from "../api/axios";
import TaskCard from "./TaskCard";

export default function TaskBoard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get("/tasks").then((res) => setTasks(res.data));
  }, []);

  const columns = [
    {
      id: "todo",
      title: "To Do",
      color: "blue",
    },
    {
      id: "inprogress",
      title: "In Progress",
      color: "orange",
    },
    {
      id: "done",
      title: "Done",
      color: "green",
    },
  ];

  return (
    <div className="board">
      {columns.map((column) => (
        <div className="column" key={column.id}>
          <div className="column-header">
            <h3>{column.title}</h3>

            <span>{tasks.filter((t) => t.status === column.id).length}</span>
          </div>

          <div className="tasks">
            {tasks
              .filter((t) => t.status === column.id)
              .map((task) => (
                <TaskCard key={task._id} task={task} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
