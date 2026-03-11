import { Navigate } from "react-router-dom";

const FarmerRoute = ({ children }) => {
  const userAuth = JSON.parse(localStorage.getItem("userAuth"));

  if (!userAuth) {
    return <Navigate to="/login" />;
  }

  if (userAuth?.[0]?.role !== "Farmer") {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default FarmerRoute;