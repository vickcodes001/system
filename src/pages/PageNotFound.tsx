import { Link } from "react-router-dom"

function PageNotFound() {
    return (
        <>
            <div className="flex flex-col items-center justify-center text-2xl bg-gray-200 p-5 mx-auto mt-100 w-100 gap-10 ">
                <h2>404, page not found</h2>
                <button className="p-2 bg-gray-400 text-white rounded-md">
                    <Link to='/'>Home</Link>
                </button>
            </div>
        </>
    )
}

export default PageNotFound