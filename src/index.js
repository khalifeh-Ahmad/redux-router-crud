import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RoutLayout from "./pages/RoutLayout";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";
import Details from "./pages/Details";
import Index from "./pages/Index";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RoutLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      { path: "post", element: <Index /> },
      { path: "add", element: <AddPost /> },
      { path: ":id/edit", element: <EditPost /> },
      {
        path: ":id",
        element: <Details />,
        loader: (data) => {
          if (isNaN(data.params.id)) {
            throw new Response("Bad Request", {
              statusText: "please insert an ID",
              status: 400,
            });
          }
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
