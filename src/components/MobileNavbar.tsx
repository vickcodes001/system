// import { useState } from "react"
import { FaTasks } from "react-icons/fa"
import { FiBell, FiSearch } from "react-icons/fi"
import {  GrProjects } from "react-icons/gr"
import { IoIosHome } from "react-icons/io"
import { TbReport } from "react-icons/tb"

function MobileNavbar() {
    // const [isOpen, setIsOpen] = useState(false)

    // const toggleMobile = () => {
    //     setIsOpen(!isOpen)
    // }

    const linkTag = "flex items-center justify-start gap-2 text-gray-600 font-bold hover:text-gray-300"
   return (
    <>
     <div className="flex flex-col gap-15 py-10 px-5 w-full h-[100vh]">
          {/* <button className="absolute right-20 top-5 z-40" onClick={toggleMobile}><GrClose className=" w-7 h-7"/></button> */}
        <div className="flex flex-col items-center justify-center ">
            <img src="/images/jiggy.jpg" alt="profile image" className="border h-20 w-20 rounded-full mb-5 object-cover" />
            <p className="text-black text-3xl font-bold">TaskMaster</p>
        </div>
        <div>
            <ul className="flex flex-col space-x-4 text-xl gap-10 font-medium mt-2">
                <li>
                    <a href="/" className={linkTag}>
                        <IoIosHome />
                        Home
                    </a>
                </li>
                <li>
                    <a href="/task" className={linkTag}>
                        <FaTasks />
                        My Tasks
                    </a>
                </li>
                <li>
                    <a href="/project" className={linkTag}>
                        <GrProjects />
                        Projects
                    </a>
                </li>
                <li>
                    <a href="/report" className={linkTag}>
                        <TbReport />
                        Reports
                    </a>
                </li>
                <li>
                    <a href="/notification" className={linkTag}>
                        <FiBell className="h-7 w-6" />
                        Notifications
                    </a>
                </li>
            </ul>
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
   )
}

export default MobileNavbar