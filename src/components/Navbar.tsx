import { useState } from "react";
import { FiBell, FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import MobileNavbar from "./MobileNavbar";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkContainer = "hidden md:flex space-x-4 text-xl gap-10 font-medium mt-2"
  const linkStyle = "text-black hover:text-gray-300";

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full flex px-10 py-5 items-center justify-between bg-white shadow-xl">
      {/* first section */}
      <div className="flex gap-15 justify-between items-center">
        <div className="text-black text-3xl font-bold">TaskMaster</div>
        <div className={linkContainer}>
          <Link to="/" className={linkStyle}>Home</Link>
          <Link to="/" className={linkStyle}>Tasks</Link>
          <Link to="/" className={linkStyle}>Employees</Link>
          <Link to="/" className={linkStyle}>Home</Link>
        </div>
      </div>

      {/* second section */}
      <div className="hidden md:flex items-center justify-end gap-5 w-1/2">
        <form className="bg-gray-200 rounded-md flex items-center relative">
          <FiSearch className="h-6 w-6 text-gray-500 ml-2 absolute left-2" />
          <input
            type="text"
            placeholder="Search"
            className="flex items-center justify-end w-40 py-2.5 px-12 text-gray-600 outline-none rounded"
          />
        </form>
        <button className="bg-gray-200 px-3 py-2 rounded-md">
          <FiBell className="h-7 w-6" />
        </button>
        <img
          src="/images/jiggy.jpg"
          alt="profile image"
          className="border h-10 w-10 rounded-full"
        />
      </div>
      <button onClick={toggleNavbar} className="flex relative md:hidden z-50">
        {isOpen ?
          <p><GrClose className="w-7 h-7 absolute right-10" /></p> : // click here to close MobileNavbar
          <GiHamburgerMenu className="w-7 h-7" /> // click here to open MobileNavbar
          }
      </button>
      {isOpen && (
        <div className="absolute w-[90%] bottom-0 left-0 bg-white/30 backdrop-blur-md shadow-2xl">
          <MobileNavbar />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
