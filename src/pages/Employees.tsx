import AssignedTasks from "../components/AssignedTasks";
import { Editbtn } from "../components/Button";
import CompletedTasks from "../components/CompletedTasks";
import Navbar from "../components/Navbar";
import Jiggy from "/images/jiggy.jpg";

const Employees = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-between px-20 py-15">
        <div className="flex justify-center items-center gap-5">
          <img src={Jiggy} className="w-50 h-50 object-cover rounded-full" />
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-bold">Vickcodes001</h3>
            <p className="text-[20px]">Software Engineer</p>
            <p className="text-[20px]">Joined 2 months ago</p>
          </div>
        </div>
        <div className="flex w-1/2 h-200px justify-end items-end py-10">
          <Editbtn />
        </div>
      </div>
        <div className="flex flex-col gap-15 mb-10 px-10">
          <AssignedTasks />
          <CompletedTasks />
        </div>
    </>
  );
};

export default Employees;
