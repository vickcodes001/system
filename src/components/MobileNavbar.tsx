// import { useState } from "react"
import { FaTasks } from "react-icons/fa";
import { FiBell, FiSearch } from "react-icons/fi";
import { GrProjects } from "react-icons/gr";
import { IoIosHome } from "react-icons/io";
import { TbReport } from "react-icons/tb";
import { Link } from "react-router-dom";

function MobileNavbar() {
  // const [isOpen, setIsOpen] = useState(false)

  // const toggleMobile = () => {
  //     setIsOpen(!isOpen)
  // }

  const mobileLinkContainer =
    "flex flex-col space-x-4 text-xl gap-10 font-medium mt-2";
  const linkTag =
    "flex items-center justify-start gap-2 text-gray-600 font-bold hover:text-gray-300";
  return (
    <>
      <div className="flex flex-col gap-15 py-25 px-5 w-full h-[100vh]">
        <div className="flex flex-col items-center justify-center ">
          <Link to="/employees">
            <img
              src="/images/jiggy.jpg"
              alt="profile image"
              className="border h-20 w-20 rounded-full mb-5 object-cover"
            />
          </Link>
          <p className="text-black text-3xl font-bold">TaskMaster</p>
        </div>
        <div>
          <div className={mobileLinkContainer}>
            <Link to="/" className={linkTag}>
              <IoIosHome />
              Home
            </Link>
            <Link to="/tasks" className={linkTag}>
              <FaTasks />
              My Tasks
            </Link>
            <Link to="/projects" className={linkTag}>
              <GrProjects />
              Projects
            </Link>
            <Link to="/reports" className={linkTag}>
              <TbReport />
              Reports
            </Link>
            <Link to="/" className={linkTag}>
              <FiBell />
              Notifications
            </Link>
          </div>
          <form className="bg-gray-200 rounded-md flex items-center relative mt-10">
            <FiSearch className="h-6 w-6 text-gray-500 ml-2 absolute left-2" />
            <input
              type="text"
              placeholder="Search"
              className="flex items-center justify-end w-40 py-2.5 px-12 text-gray-600 outline-none rounded"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default MobileNavbar;
