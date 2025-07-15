const assignedTask = [
  {
    id: 1,
    task: "Develop new feature",
    status: "In Progress",
    dueDate: "2024-08-15",
    priority: "High",
  },
  {
    id: 2,
    task: "Fix bugs in existing code",
    status: "In Progress",
    dueDate: "2024-07-15",
    priority: "Medium",
  },
  {
    id: 3,
    task: "Write unit tests",
    status: "To Do",
    dueDate: "2024-08-25",
    priority: "Low",
  },
];

const AssignedTasks = () => {
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
                <p className="w-1/2">{aTasks.task}</p>
                <p className="w-1/2">{aTasks.status}</p>
                <p className="w-1/2">{aTasks.dueDate}</p>
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
