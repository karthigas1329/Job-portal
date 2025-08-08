import React from 'react'
import './App.css'
import { Landingpage } from './Landingpage'
import { Elogin } from './Components-EmployerSignup/Elogin'
import { Jlogin } from './Components-JobseekerSignup/Jlogin'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Jsignup } from './Components-JobseekerSignup/Jsignup'
import { Jcreatepassword } from './Components-JobseekerSignup/Jcreatepassword'
import { Jforgotpassword } from './Components-JobseekerSignup/JForgotpassword'

const router = createBrowserRouter([{
  path: '/Job-portal',
  element: <Landingpage />,
},
{
  path: '/Job-portal/employer',
  element: <Elogin />,
},
{
  path: '/Job-portal/jobseeker/login',
  element: <Jlogin />,
},
{
  path: '/Job-portal/jobseeker/login/forgotpassword',
  element: <Jforgotpassword />,
},
{
  path: '/Job-portal/jobseeker/signup',
  element: <Jsignup />,
},
{
  path: '/Job-portal/jobseeker/login/forgetpassword/createpassword',
  element: <Jcreatepassword />,
}])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
