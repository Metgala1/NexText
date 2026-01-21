import { createBrowserRouter } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

const router = createBrowserRouter([
    {path: "/", element: <SignUp />},
    {path: "/login", element: <Login />},
]);

export default router;