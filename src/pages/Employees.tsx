import { useState } from "react";
import AssignedTasks from "../components/AssignedTasks";
import CompletedTasks from "../components/CompletedTasks";
import Navbar from "../components/Navbar";
import Jiggy from "/images/jiggy.jpg";
import { GrClose } from "react-icons/gr";

const Employees = () => {
const [showEdit, setShowEdit] = useState(false)

  const handleEdit = () => {
    setShowEdit(true)
  }


  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between px-20 py-15">
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <img src={Jiggy} className="w-50 h-50 object-cover rounded-full" />
          <div className="flex flex-col text-center md:text-start gap-1">
            <h3 className="text-2xl font-bold">Vickcodes001</h3>
            <p className="text-[20px]">Software Engineer</p>
          </div>
        </div>
        <div className="flex w-1/2 md:h-50 justify-end items-end py-10">
          <button 
            className="bg-gray-300 text-black font-bold py-3 px-5 w-[200px] rounded-md hover:bg-gray-500 transition duration-300 ease-in-out cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-15 mb-10 px-10">
        <AssignedTasks />
        <CompletedTasks />
        {showEdit && (
          <div className="fixed inset-0 bg-gray-100/5 bg-opacity-50 flex items-center  justify-center z-50 backdrop-blur-sm">
            <div className="fixed md:top-[20%] md:left-[15%] lg:left-[32%] w-[90%] h-90 py-15 md:w-150 md:h-150 flex flex-col items-center justify-between rounded-2xl bg-gray-900 text-white bg-opacity-50 z-50 transition-all duration-100 ease-in-out opacity-100">
              <button 
                className="absolute top-10 left-10 text-xl cursor-pointer"
                onClick={() => setShowEdit(false)}
              >
                <GrClose />
              </button>
              <img
                src={Jiggy}
                alt="a profile picture"
                className="w-50 h-50 object-cover rounded-full"
              />
              <div className="flex flex-col text-center gap-2 text-2xl">
                <label htmlFor="">Name</label>
                <input type="text" className="border bg-white rounded-md p-2 text-black"/>
              </div>
              <div className="flex flex-col text-center gap-2 text-2xl">
                <label htmlFor="">Office Position</label>
                <input type="text" className="border bg-white rounded-md p-2 text-black" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Employees;
