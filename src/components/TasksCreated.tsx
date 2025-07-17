import { useState } from "react";
import { MdDelete } from "react-icons/md";

// type Task = {
//   id: number;
//   title: string;
// }

function TasksCreated() {
  const [taskModal, setTaskModal] = useState([
    {
        id: 1,
        title: "Fix a car brake",
        description: "I want to fix my brake issues that occured in my benz",
        priority: "High",
      },
      {
        id: 2,
        title: "Repair a car bunnet",
        description: "I want to fix my car bunnet that happened last night",
        priority: "Medium",
      },
      {
        id: 3,
        title: "Fix a car accelerator",
        description:
          "I want to fix my accelerator, it just stopped working all of a sudden",
        priority: "Low",
      },
      {
        id: 4,
        title: "Service a car",
        description:
          "I want to service my car, it is due for service, do it now!",
        priority: "High",
      },
  ])

   // const [taskToDelete, setTaskToDelete] = useState<Task | null>(null)

  const handleTaskDelete = (id: number) => {
    setTaskModal(prev => prev.filter(taskModal => taskModal.id !== id))
  }

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10 justify-between px-5">
      {taskModal.map((task) => (
        <div
          key={task.id}
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
          <h2 className="text-2xl font-semibold text-center">{task.title}</h2>
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
          
        </div>
      ))}
    </div>
  );
}

export default TasksCreated;
