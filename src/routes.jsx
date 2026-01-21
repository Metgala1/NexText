import { createBrowserRouter } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import DesktopChatList from "./components/ChatList";

const router = createBrowserRouter([
    {path: "/", element: <DesktopChatList />},
    {path: "/login", element: <Login />},
    {path: "/signup", element: <SignUp />},
]);

export default router;