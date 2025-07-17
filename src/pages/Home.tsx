import Createbtn from "../components/Button";
import Navbar from "../components/Navbar";
import TasksCreated from "../components/TasksCreated";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex flex-col justify-center items-start gap-5 w-full md:w-1/2 py-5 px-10">
          <h2 className="pt-3 text-4xl font-bold text-center md:text-start">Welcome to Task Manager</h2>
          <p className="text-xl text-center md:text-start">
            Our Task Manager App helps you create, assign, and track tasks in a
            collaborative workspace. Making team workflow smooth from start to
            finish
          </p>
        </div>
        {/* create tasks section */}
        <div className=" flex justify-end items-end px-10 w-1/2">
          <Link to="/tasks"><Createbtn /></Link>
        </div>
      </div>
        {/* tasks created section */}
        <div className="p-10">
          <TasksCreated />
        </div>
    </>
  );
}

export default Home;
