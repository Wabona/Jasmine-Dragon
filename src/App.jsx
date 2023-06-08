import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from "../Components/navbar"
import Body from "../Components/body"
import { BrowserRouter, Route, Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Tea from "../Components/tea"

const router = createBrowserRouter([
  {
    path: "/tea",
    element: <Tea/>,


 
  },
  {
    path:"/home",
    element: (
    <div>
      <Body/>
      <Link to="/tea">Tea</Link>
    </div>
    )

  },
  {
    path:"/",
    element: <Body/>
  }
]);

function App() {
  const [count, setCount] = useState(0)

 return (
    <>
    

    <RouterProvider router={router}/>
    </>
  )
}

export default App