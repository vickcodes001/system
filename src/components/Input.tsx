export function Input() {
    const inputStyling = "flex items-center w-[100%] border py-2.5 px-3 text-gray-600 outline-none border border-gray-400 rounded-md h-15 mt-3 md:w-100"
  return (
    <div>
        <input
            type="text"
            className={inputStyling}
          />
    </div>
  )
}

export function Textarea( ) {
    const textareaStyling = "w-[100%] md:w-100 border border-gray-400 mt-3 rounded-md h-40 p-2.5 text-gray-600 outline-none"
  return (
    <div>
        <textarea
            className={textareaStyling}
          />
    </div>
  )
}

export function InputDate() { 
    const inputDateStyling = "flex items-center mt-3 justify-start h-15 py-2.5 px-3 text-gray-600 outline-none border border-gray-400 rounded-md w-[100%] md:w-100";
    return (
        <div>
            <input
                type="date"
                className={inputDateStyling}
            />
        </div>
    );
}
