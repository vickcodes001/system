import { Cancelbtn, Createbtn } from "../components/Button"
import  { Input, InputDate, Textarea } from "../components/Input"
import Navbar from "../components/Navbar"
import PriorityDropdown from "../components/Priority"

const Tasks = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col px-10 py-10 gap-5">
        <h2 className="text-3xl md:text-4xl font-bold">Create Task</h2>
        <div>
          <h4>Task Name</h4>
          <Input />
        </div>
        <div>
          <h4>Descripton</h4>
          <Textarea />
        </div>
        <div>
          <h4>Project</h4>
          <Input />
        </div>
        <div>
          <PriorityDropdown />
        </div>
        <div>
          <h4>Due Date</h4>
          <InputDate />
        </div>
        {/* button section */}
        <div className="flex justify-end pr-10 gap-5 w-full">
          <Cancelbtn />
          <Createbtn />
        </div>
      </div>
    </>
  )
}

export default Tasks