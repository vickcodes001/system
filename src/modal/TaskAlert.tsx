import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

type AlertProps = {
  message: string;
  onClose: () => void;
};

function TaskAlert({ message, onClose }: AlertProps) {
  return (
    <div className="fixed inset-0 bg-gray-100/5 bg-opacity-50 flex items-center  justify-center z-50 backdrop-blur-sm">
      <div className="fixed md:top-[20%] md:left-[15%] lg:left-[32%] w-[90%] h-90 py-15 md:w-150 md:h-150 flex flex-col items-center justify-between rounded-2xl bg-gray-900 text-white bg-opacity-50 z-50 transition-all duration-100 ease-in-out opacity-100">
        <button
          className="w-full px-10 z-30  cursor-pointer"
          onClick={onClose}
        >
          <GrClose />
        </button>
        <p className="font-bold text-3xl">{message}</p>
        <Link to="/">
            <p className='bg-blue-500 rounded-md p-2  text-center'>See Tasks</p>
        </Link>
      </div>
    </div>
  );
}

export default TaskAlert;
