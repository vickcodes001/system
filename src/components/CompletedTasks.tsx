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
          </div>
        </div>
      </div>
    </>
  );
};

export default CompletedTasks;
