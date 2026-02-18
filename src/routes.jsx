import { createBrowserRouter } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import DesktopChatList from "./components/ChatList";
import MobileConversation from "./components/MobileChat";
import Test from "./components/text.jsx";

const router = createBrowserRouter([
    {path: "/", element: <DesktopChatList />},
    {path: "/login", element: <Login />},
    {path: "/signup", element: <SignUp />},
    {path: "/chats/:id", element: <MobileConversation />},
    {path: "/test", element: <Test />},
]);

export default router;