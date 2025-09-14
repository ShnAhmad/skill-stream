import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
  const authStatus = useSelector((state) => state.auth.isLoggedIn);

  // If the page requires login but user is not logged in → redirect to login
  if (authentication && !authStatus) {
    return <Navigate to="/login" replace />;
  }

  // If the page requires guest (like login/signup) but user is logged in → redirect home
  if (!authentication && authStatus) {
    return <Navigate to="/" replace />;
  }

  // Otherwise, render the children
  return <>{children}</>;
}
