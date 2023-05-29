import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RedirectAuthenticated from "../features/auth/components/RedirectIfAuthenticated";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RedirectAuthenticated>
        <LoginPage />
      </RedirectAuthenticated>
    )
  },
  { path: "/", element: <HomePage /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}