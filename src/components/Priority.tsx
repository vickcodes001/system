import { useEffect, useState } from "react";
import { GoChevronDown } from "react-icons/go";

type Priority = {
  id: string;
  name: string;
};

export default function PriorityDropdown() {
  const [priorities, setPriorities] = useState<Priority[]>([
    {
      id: "1",
      name: "High",
    },
    {
      id: "2",
      name: "Medium",
    },
    {
      id: "3",
      name: "Low",
    },
]);
  const [selected, setSelected] = useState<Priority | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Fetches the employees data from the backend
  useEffect(() => {
    const fetchPriority = async () => {
      try {
        const res = await fetch("the api from backend");
        const data = await res.json();
        setPriorities(data);
      } catch (error) {
        console.log("Failed to fetch employee data:", error);
      }
    };
    fetchPriority();
  }, []);

  const handleSelect = (priority: Priority) => {
    setSelected(priority);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col gap-3 items-start mt-3 justify-center h-15 py-2.5 outline-none w-[100%]">
      <label>Priority</label>
        <div className="relative border border-gray-400 flex flex-col items-start rounded-md w-[100%] md:w-100 text-gray-600 mb-5 cursor-pointer">
            <div onClick={() => setIsOpen(!isOpen)} className="flex rounded-md items-center justify-between w-full p-2">
                {selected ? selected.name : "Priority"}
                <GoChevronDown className="ml-2" />
            </div>

            {isOpen && (
                <div className="absolute flex flex-col gap-3 border border-gray-200 font-bold shadow-xl rounded-xl p-5 w-full z-20 top-12 bg-gray-100">
                    {priorities.map((pri) => (
                        <div key={pri.id} onClick={() => handleSelect(pri)}>
                        {pri.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    </div>
  );
}
