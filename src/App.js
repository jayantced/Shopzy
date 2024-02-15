import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Shop from "./pages/Shop";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailsPage, { loader as productDetailsLoader } from "./pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop", element: <Shop /> },
      {path: '/:id', element: <ProductDetailsPage />, loader: productDetailsLoader}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
