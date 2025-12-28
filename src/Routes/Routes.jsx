import { createBrowserRouter } from "react-router";
import HomeLayout from "../Root/HomeLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout
    },
]);