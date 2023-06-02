import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RedirectAuthenticated from "../features/auth/components/RedirectIfAuthenticated";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";
import Header from "../layouts/Header";
import FriendPage from "../pages/FriendPage";
import ProfilePage from "../pages/ProfilePage";
import { Outlet } from "react-router-dom";
import Container from "../layouts/Container";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RedirectAuthenticated>
        <LoginPage />
      </RedirectAuthenticated>
    ),
  },
  {
    path: "/",
    element: (
  <ProtectedRoute>
    <Container />
  </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: 
          <HomePage />
        
      },
      {
        path: "/friend",
        element: <FriendPage />,
      },
      {
        path: "/profile/:profileUserId",
        element: <ProfilePage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
