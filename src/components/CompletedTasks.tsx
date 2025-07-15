const completedTask = [
  {
    id: 1,
    task: "Implement user authentication",
    status: "Completed",
    dueDate: "2024-06-15",
    priority: "High",
  },
  {
    id: 2,
    task: "Design database schema",
    status: "Completed",
    dueDate: "2024-05-14",
    priority: "High",
  },
];

const CompletedTasks = () => {
  return (
    <>
      <div className=" flex flex-col px-10 gap-5">
        <h1 className="text-2xl font-bold">Completed Tasks</h1>
        {/* task modal */}
        <div>
          <div className="flex w-full border border-gray-500 font-semibold justify-between p-5 text-[20px]">
            <p className="w-1/2">Task</p>
            <p className="w-1/2">Status</p>
            <p className="w-1/2">Due Date</p>
            <p className="w-1/2">Priority</p>
          </div>
          <div className="flex flex-col w-full justify-between text-[20px]">
            {completedTask.map((cTasks) => (
              <div
                key={cTasks.id}
                className="flex w-full border border-gray-500 border-t-0 justify-between p-5 text-[20px]"
              >
                <p className="w-1/2">{cTasks.task}</p>
                <p className="w-1/2">{cTasks.status}</p>
                <p className="w-1/2">{cTasks.dueDate}</p>
                <div className="w-1/2">
                    <p
                  className={`text-sm w-20 text-center font-medium px-3 py-1 rounded-full ${
                    cTasks.priority === "High"
                      ? "bg-red-100 text-red-600"
                      : cTasks.priority === "Medium"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {cTasks.priority}
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

export default CompletedTasks;
