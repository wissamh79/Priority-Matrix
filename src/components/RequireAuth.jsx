import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";
import SideBar from "./SideBar";

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();
  //check accessToken to persist login after refresh
  return auth?.accessToken ? (
    <main className="flex w-full h-full items-start justify-between mt-4 overflow-hidden  ">
      <SideBar />

      <Outlet />
    </main>
  ) : (
    <Navigate to="/" state={{ from: location }} replace={true} />
  );
};
export default RequireAuth;
