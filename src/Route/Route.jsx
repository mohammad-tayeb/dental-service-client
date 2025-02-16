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
]);
