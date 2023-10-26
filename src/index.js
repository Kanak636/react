import React from "react";
import ReactDOM from "react-dom"
import Login from "./pages/login/Login";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Details from "./pages/Details/Details";
import Upload from "./pages/upload/Upload";
import Verification from "./pages/verification/Verification";


  const router = createBrowserRouter([
    {
        path: "/",
        element:<Login />,
    },
    {
        path: "/details",
        element:<Details />,
    },
    {
        path: "/upload",
        element:<Upload />,
    },
    {
        path: "/valid",
        element:<Verification />,
    },
   
   
  ]);
  
ReactDOM.render(<RouterProvider router={router}/>,document.getElementById("root"));