import { React, StrictMode } from 'react'
import { ReactDOM, createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
