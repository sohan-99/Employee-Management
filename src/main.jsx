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
import AllEmployee from './pages/AdminHome/AllEmployee';
import EmployeeList from './pages/HR/EmployeeList';
import PaymentHistory from './pages/Employee/PaymentHistory';
import WorkSheet from './pages/Employee/WorkSheet';
import Details from './pages/HR/Details';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
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
        element: <PrivetRoute><Contact></Contact></PrivetRoute>
      },
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
    element: <PrivetRoute><DashboardLayout></DashboardLayout></PrivetRoute>,
    children: [
      // Admin Dashboard
      {
        path: '/dashboard/allemployee',
        element: <AllEmployee></AllEmployee>
      },
      // HR  Dashboard
      {
        path: "/dashboard/employeeList",
        element: <EmployeeList></EmployeeList>
      },
      {
        path: "/dashboard/details",
        element: <Details></Details>
      },
      // eployee Dashboard
      {
        path: "/dashboard/paymenthistory",
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: "/dashboard/worksheet",
        element: <WorkSheet></WorkSheet>
      }
    ]

  }
]);
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <QueryClientProvider client={queryClient}>
   <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
   </QueryClientProvider>
  </React.StrictMode>,
)
