import { Navigate, useNavigate } from "react-router-dom";

const AdminProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const userAuth = JSON.parse(localStorage.getItem("userAuth")) ;

  // if (!userAuth) {
  //   navigate("/login")
  // return;  
  // }

 const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" />;
  }

  if (userAuth?.[0]?.role !== "Admin") {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default AdminProtectedRoutes;