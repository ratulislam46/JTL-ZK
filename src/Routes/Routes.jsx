import { createBrowserRouter } from "react-router";
import HomeLayout from "../Root/HomeLayout";
import Home from "../Page/Home/Home";
import SignUp from "../Page/Authentication/SignUp/SignUp";
import SignIn from "../Page/Authentication/SignIn/SignIn";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    },
    {
        path: '/signup',
        Component: SignUp
    },
    {
        path: '/signin',
        Component: SignIn
    }
]);