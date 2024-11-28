import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/Root.jsx";
import Home from "./Pages/Home.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import LogIn from "./Pages/LogIn.jsx";
import SignUp from "./Pages/SignUp.jsx";
import ForgetPass from "./Pages/ForgetPass.jsx";
import NotFound from "./Pages/NotFound.jsx";
import SingleBlog from "./Pages/SingleBlog.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";
import MyProfiele from "./Pages/MyProfiele.jsx";
import BookCall from "./Pages/BookCall.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/forgetpass",
        element: <ForgetPass />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <MyProfiele />
          </PrivateRoute>
        ),
      },
      {
        path: "/consultation",
        element: (
          <PrivateRoute>
            <BookCall />
          </PrivateRoute>
        ),
      },
      {
        path: "/services/:postId",
        element: (
          <PrivateRoute>
            <SingleBlog></SingleBlog>
          </PrivateRoute>
        ),
      },
    ],
    errorElement: <NotFound></NotFound>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
