export function Cancelbtn() {
    const cancelbtn = "bg-gray-300 text-black font-bold py-3 px-5 rounded-md hover:bg-gray-500 transition duration-300 ease-in-out";
    return (
        <button className={cancelbtn}>
            Cancel
        </button>
    );
}

export function Createbtn() {
    const createbtn = "bg-blue-500 text-white font-bold py-3 px-5 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out";
    return (
        <button className={createbtn}>
            Create Task
        </button>
    );
}