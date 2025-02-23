import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import DoctorInfo from "../Pages/DoctorInfo";
import ErrorPage from "../Pages/errorPage";
import Appointment from "../Pages/Appointment";
import Slot from "../Components/Slot";
import MyAppointments from "../Pages/MyAppointments";
import AdminDashboard from "../Pages/AdminDashboard";
import Dashboard from "../Pages/Dashboard";
import Users from "../Pages/Users";
import AddDoctor from "../Pages/AddDoctor";
import ManageDoctors from "../Pages/ManageDoctors";
import About from "../Pages/About";
import AdminRoute from "./AdminRoute";
import AllServices from "../Pages/AllServices";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/doctorInfo/:id",
        element: <DoctorInfo></DoctorInfo>
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
        children: [
          {
            path: "/appointment/:category",
            element: <Slot></Slot>,
            loader: async ({ params }) => {
              return fetch(`http://localhost:5000/slots/${params.category}`);
            },
          },
        ]
      },
      {
        path: "/myAppointments",
        element: <MyAppointments></MyAppointments>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/allServices",
        element: <AllServices></AllServices>
      }
    ]
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  },
  {
    path: "/adminDashboard",
    element: <AdminRoute><AdminDashboard></AdminDashboard></AdminRoute>,
    children: [
      {
        path: "dashboard", // Fix: No leading "/"
        element: <Dashboard></Dashboard>
      },
      {
        path: "users", // Fix: No leading "/"
        element: <Users></Users>
      },
      {
        path: "addDoctor",
        element: <AddDoctor></AddDoctor>
      },
      {
        path: "manageDoctors",
        element: <ManageDoctors></ManageDoctors>
      }
    ]
  }
]);
