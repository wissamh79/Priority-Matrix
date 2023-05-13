import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";
const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();
  //check accessToken to persist login after refresh
  return auth?.accessToken ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace={true} />
  );
};
export default RequireAuth;
