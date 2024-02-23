import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../store/user-slice";

const ProtectedRoute = ({ component: Component }) => { // Change 'element' to 'component'
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/user" replace />;
  }
  return <Component />; // Render the component
};

export default ProtectedRoute;