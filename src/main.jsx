import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Layout from './Layout/Layout';
import Home from './pages/Home/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import ServiceDetails from './pages/Home/Services/ServiceDetails';
import About from './pages/Home/About/About';
import Contact from './pages/Home/Contact/Contact';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import AuthProvider from './Provider/AuthProvider';
import PrivetRoute from './PrivetRoute/PrivetRoute';
import DashboardLayout from './Layout/DashboardLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element:<Home></Home> 
      },
      {
        path: '/:service_name',
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/servicetype/${params.service_name}`)
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element:<PrivetRoute><Contact></Contact></PrivetRoute> 
      },
      // {
      //   path: '/dashboard',
      //   element:<PrivetRoute><Dashboard></Dashboard></PrivetRoute> 
      // },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ]
  },
  {
    path: '/dashboard',
    element:<PrivetRoute><DashboardLayout></DashboardLayout></PrivetRoute> ,
    children: [
      
      
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
