import { Navigate } from "react-router-dom";

const ProviderProtectedRoutes = ({ children }) => {
  const userAuth = JSON.parse(localStorage.getItem("userAuth"));
 const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" />;
  }

  if (userAuth?.[0]?.role !== "Provider") {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default ProviderProtectedRoutes;