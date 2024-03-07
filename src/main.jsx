import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github from './Components/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path:"",
        element: <Home />
      },
      {
        path:"About",
        element: <About />
      },
      {
        path:"Contact",
        element: <Contact />
      },
      {
        path:"User/:userid",
        element:<User />
      },
      {
        //loader
        path:"Github",
        element:<Github />
      }
    ]
  }
])

// //Method 2
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />}></Route>
//       <Route path='About' element={<About />}></Route>
//       <Route path='Contact' element={<Contact />}></Route>
//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
