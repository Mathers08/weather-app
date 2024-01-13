import { createBrowserRouter } from "react-router-dom";
import { Cities, Home, Layout, Map, Preview, Settings } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Preview />,
      },
      {
        path: "/start",
        element: <Home />,
      },
      {
        path: "/cities",
        element: <Cities />,
      },
      {
        path: "/map",
        element: <Map />,
      },
      {
        path: "/settings",
        element: <Settings />,
      }
    ]
  },
]);
