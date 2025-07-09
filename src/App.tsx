import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import Main from './components/Main'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <div>
      <Navbar />
      <Main />
      <RouterProvider router={router} />
    </div>
    </>
  )
}

export default App
