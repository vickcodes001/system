import { Cancelbtn } from "../components/Button";
import Createbtn from "../components/Button";
import Navbar from "../components/Navbar";
import TaskAlert from "../modal/TaskAlert";
import { useState } from "react";

const Tasks = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("")
  const [date, setDate] = useState("");

  // storing the data from the input field to localStorage
  const handleCreateTask = () => {
    const newTask = {
      id: Date.now(),
      taskName,
      description,
      priority,
      date,
    };

    if (newTask.taskName === "") {
      alert("Fill in the taskName")
      return
    } 
    
    if (newTask.description === "") {
      alert("Please describe the task")
      return
    } 
    
    if (newTask.priority === "") {
      alert("Please choose a priority")
      return
    } 
    
    if (newTask.date === ""){
      alert("Please choose a date")
      return
    }
  
    const storedTasks = JSON.parse(localStorage.getItem("Task") || "[]");

    storedTasks.push(newTask);

    localStorage.setItem("Task", JSON.stringify(storedTasks));
    console.log("Task saved:", storedTasks);

    // Logic to create a task
    setShowAlert(true);
    setTaskName("");
    setDescription("");
    setPriority("")
    setDate("");
  };

  const handleCloseTask = () => {
    setShowAlert(false);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col px-10 py-10 gap-5">
        <h2 className="text-3xl md:text-4xl font-bold">Create Task</h2>
        <div>
          <h4>Task Name</h4>
          <input
            type="text"
            value={taskName}
            className="flex items-center w-[100%] py-2.5 px-3 text-gray-600 outline-none border border-gray-400 rounded-md h-15 mt-3 md:w-100"
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <div>
          <h4>Description</h4>
          <textarea
            className="w-[100%] md:w-100 border border-gray-400 mt-3 rounded-md h-40 p-2.5 text-gray-600 outline-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <div className="flex flex-col gap-3 items-start mt-3 justify-center py-2.5 outline-none w-[100%]">
            <label>Priority</label>
            <select
              name=""
              id=""
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="relative border border-gray-400 h-15 p-2 flex flex-col justify-center rounded-md w-[100%] md:w-100 text-gray-600 mb-5 cursor-pointer"
            >
              <option value="selected"></option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>
        <div>
          <h4>Due Date</h4>
          <input
            type="date"
            className="flex items-center mt-3 justify-start h-15 py-2.5 px-3 text-gray-600 outline-none border border-gray-400 rounded-md w-[100%] md:w-100"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        {/* button section */}
        <div className="flex justify-end pr-10 gap-5 w-full">
          <Cancelbtn />
          <Createbtn onClick={handleCreateTask} />
          {showAlert && (
            <TaskAlert message="Task Created" onClose={handleCloseTask} />
          )}
        </div>
      </div>
    </>
  );
};

export default Tasks;
