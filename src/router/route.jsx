import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/home/Home";
import CakeDitails from "@/pages/CakeDitails/CakeDitails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
      {
        path: "/cake/:id",
        // find one cake for url id
        // loader: async ({params}) => fetch('/cakes.json')
        element: <CakeDitails />,
      },
    ],
  },
]);

export default router;
