import { createBrowserRouter } from "react-router-dom";
import Identity_Layout from "./layouts/identity_layout/Identity_Layout";
import Login, { loginAction } from "./features/identity/components/Login";
import Register, {
  registerAction,
} from "./features/identity/components/Register";
import Main_Layout from "./layouts/mian_layout/Main_Layout";

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
  { element: <Main_Layout />, path: "/", children: [] },
]);
