import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RoutLayout from "./pages/RoutLayout";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";
import Details from "./pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RoutLayout />,
    children: [
      { path: "add", element: <AddPost /> },
      { path: ":id/edit", element: <EditPost /> },
      { path: ":id", element: <Details /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
