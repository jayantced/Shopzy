import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Shop from "./pages/Shop";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop", element: <Shop /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
