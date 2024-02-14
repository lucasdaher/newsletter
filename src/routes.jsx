import { createBrowserRouter } from "react-router-dom";
import App from "./app/App";
import Error from "./pages/Error/Error";
import Success from "./pages/Success/Success";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/success",
    element: <Success />,
    errorElement: <Error />,
  },
]);
