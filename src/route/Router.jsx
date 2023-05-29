import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RedirectAuthenticated from "../features/auth/components/RedirectIfAuthenticated";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";
import Header from "../layouts/Header";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RedirectAuthenticated>
        <LoginPage />
      </RedirectAuthenticated>
    )
  },
  { 
     path: "/", 
     element: (
    // <ProtectedRoute>
     <HomePage />
    // </ProtectedRoute>
     )
    
    },
    {
        path: '/friend',
        element:<Header />
    }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}