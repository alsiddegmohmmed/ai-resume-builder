import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignInPage from './components/ui/auth/sign-in/index.jsx'
import Home from './home/index.jsx'
import Dashboard from './dashboard/index.jsx'


const router = createBrowserRouter([
  { 
    element: <App/>, 
    children: [
      {
        path: '/', 
        element: <Home/> 
      },
      {
        path: '/dashboard', 
        element: <Dashboard/> 
      },
    ]
  },
  {
    path: '/auth/sign-in',
    element: <SignInPage/> 
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
