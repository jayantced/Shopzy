import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailsPage, {
  loader as productDetailsLoader,
} from "./pages/Product";
import Cart from "./pages/Cart";
import User from "./pages/User";
import ProtectedRoute from "./utils/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/cart", element: <ProtectedRoute component={Cart} /> },
      { path: "/user", element: <User /> },
      {
        path: "/:id",
        element: <ProductDetailsPage />,
        loader: productDetailsLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
