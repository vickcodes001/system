import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

type TaskType = {
  id: number,
  taskName: string,
  description: string,
  priority: string,
  date: string,
}

function TasksCreated() {
  const [taskModal, setTaskModal] = useState<TaskType[]>([])

  console.log("taskModal:", taskModal);
  

  useEffect(() => {
    const storedTask = localStorage.getItem("Task")
    if (storedTask) {
      setTaskModal(JSON.parse(storedTask))
    }
  }, [])  

  const handleTaskDelete = (id: number) => {
    setTaskModal(prev => prev.filter(taskModal => taskModal.id !== id))

    const existing = JSON.parse(localStorage.getItem("Task") || "[]")
    const updated = existing.filter((task: TaskType) => task.id !== id)
    localStorage.setItem("Task", JSON.stringify(updated))
  }

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10 justify-between px-5">
      {taskModal.map((task, i) => (
        
        <div
          key={i}
          className="flex flex-col items-center justify-center gap-5 w-full bg-gray-100 border border-gray-300 px-5 md:px-10 py-7 rounded-2xl "
        >
            <div className="flex justify-end gap-2 w-full">
            <button 
              className="font-bold p-2 rounded-md bg-red-100 hover:text-red-700 text-red-500 transition duration-300 ease-in-out cursor-pointer"
              onClick={() => handleTaskDelete(task.id)}  
            >
              <MdDelete />
            </button>
          </div>
          <h2 className="text-2xl font-semibold text-center">{task.taskName}</h2>
          <p className="text-xl text-center">{task.description}</p>
          <span
            className={`text-sm font-medium px-3 py-1 rounded-full ${
              task.priority === "High"
                ? "bg-red-100 text-red-600"
                : task.priority === "Medium"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {task.priority}
          </span>
          <div>
            <p>
              {task.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TasksCreated;
