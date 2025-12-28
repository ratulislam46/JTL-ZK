import { createBrowserRouter } from "react-router";
import HomeLayout from "../Root/HomeLayout";
import Home from "../Page/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children:[
            {index:true,
                Component: Home
            }
        ]
    },
]);