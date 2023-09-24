import { createBrowserRouter } from "react-router-dom";
import Identity_Layout from "./layouts/Identity_Layout";
import Login, { loginAction } from "./features/identity/components/Login";
import Register, {
  registerAction,
} from "./features/identity/components/Register";

export const router = createBrowserRouter([
  {
    element: <Identity_Layout />,
    children: [
      {
        element: <Login />,
        path: "/login",
        action: loginAction,
        errorElement: <Login />,
      },
      {
        element: <Register />,
        path: "/register",
        action: registerAction,
        errorElement: <Register />,
      },
    ],
  },
]);
