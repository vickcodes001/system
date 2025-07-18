import { useEffect, useState } from "react";

type AssignedTaskType = {
  id: number;
  taskName: string;
  description: string;
  priority: string;
  date: string;
};

const AssignedTasks = () => {
  const [assignedTask, setAssignedTask] = useState<AssignedTaskType[]>([]);

  useEffect(() => {
    const storedAssignedTask = localStorage.getItem("Task")
    if (storedAssignedTask) {
      setAssignedTask(JSON.parse(storedAssignedTask))
    }
  }, [])

  return (
    <>
      <div className=" flex flex-col px-10 gap-5">
        <h1 className="text-2xl font-bold">Assigned Tasks</h1>
        {/* task modal */}
        <div>
          <div className="flex w-full border border-gray-500 font-semibold justify-between p-5 text-[20px]">
            <p className="w-1/2">Task</p>
            <p className="w-1/2">Status</p>
            <p className="w-1/2">Due Date</p>
            <p className="w-1/2">Priority</p>
          </div>
          <div className="flex flex-col w-full justify-between text-[20px]">
            {assignedTask.map((aTasks) => (
              <div
                key={aTasks.id}
                className="flex w-full border border-gray-500 border-t-0 justify-between p-5 text-[20px]"
              >
                <p className="w-1/2">{aTasks.taskName}</p>
                <p className="w-1/2">{aTasks.description}</p>
                <p className="w-1/2">{aTasks.date}</p>
                <div className="w-1/2">
                  <p
                    className={`text-sm w-20 text-center font-medium px-3 py-1 rounded-full ${
                      aTasks.priority === "High"
                        ? "bg-red-100 text-red-600"
                        : aTasks.priority === "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {aTasks.priority}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AssignedTasks;
