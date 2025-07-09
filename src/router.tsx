import { createBrowserRouter } from 'react-router-dom'
import Home from './components/pages/Home'
import Tasks from './components/pages/Tasks'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    }, 
    {
        path: '/tasks',
        element: <Tasks />
    }
])