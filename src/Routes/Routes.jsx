import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import Checkout from "../Pages/Checkout/Checkout";
import Bookings from "../Pages/Bookings/Bookings";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
 

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/singup',
            element: <SingUp></SingUp>
        },
        {
          path: '/chackout/:id',
          element: <Checkout></Checkout> ,
          loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/bookings',
          element:   <PrivetRoute><Bookings></Bookings></PrivetRoute> 
        }
      ]
    },
  ]);



  export default router;