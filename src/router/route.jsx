import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <div>Hello World</div>,
            },
            {
                path: "/about",
                element: <div>About</div>,
            },
        ],
    },
]);

export default router;