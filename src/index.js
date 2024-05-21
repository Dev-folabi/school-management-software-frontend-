import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Error from "./pages/ErrorPage/errorPage";
import { AuthContextProvider } from "./context/userContext/authContext";
import LoginPage from "./pages/Auth/loginPage";
import SignUpPage from "./pages/Auth/signupPage";
import DashboardPage from "./pages/DashboardPage/dashboardPage";
import DashboardHome from "./pages/DashboardPage/dashboardHome";
import DashboardLibrary from "./pages/DashboardPage/dashboardLibrary";
import DashboardAnalytic from "./pages/DashboardPage/dashboardAnalytic";
import Code from "./component/game/code";
import ProtectedPages from "./pages/Auth/protectedPages";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Code /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignUpPage /> },
    ],
  },

  // Protected Routes

  {
    path: "/dashboard",
    element: (
      <ProtectedPages>
        <DashboardPage />
      </ProtectedPages>
    ),
    children: [
      { path: "/dashboard/home", element: <DashboardHome /> },
      { path: "/dashboard/library", element: <DashboardLibrary /> },
      { path: "/dashboard/analytic", element: <DashboardAnalytic /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);

reportWebVitals();
