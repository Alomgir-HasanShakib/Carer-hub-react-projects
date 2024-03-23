import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Componants/Home/Home.jsx";
import Root from "./Componants/Root/Root.jsx";
import Statistics from "./Componants/Statistic/Statistics.jsx";
import Blogs from "./Componants/Blogs/Blogs.jsx";
import ErrorPage from "./Componants/ErrorPage/ErrorPage.jsx";
import AppliedJobs from "./Componants/ApplyidJobs/AppliedJobs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistic",
        element: <Statistics></Statistics>,
      },
      {
        path: "/appliedjob",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
