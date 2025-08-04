import React from 'react'
import './App.css'
import { Landingpage } from './Landingpage'
import { EmpLog } from './EmpLog'
import { Jlog } from './Jlog'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([{
  path: '/Job-portal',
  element: <Landingpage />,
},
{
  path: '/Job-portal/employer',
  element: <EmpLog />,
},
{
  path: '/Job-portal/jobseeker',
  element: <Jlog />,
}])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
