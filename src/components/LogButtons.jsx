import { useNavigate, useLocation } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import { FiLogIn, FiLogOut } from "react-icons/fi";

export const LoginButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <button
      className=" w-[100px]   px-2 py-1 bg-button text-white flex  items-center justify-center  rounded-lg shadow-xl font-semibold cursor-pointer hover:shadow-2xl space-x-2"
      onClick={() =>
        navigate("/login", { state: { from: location }, replace: true })
      }
    >
      <FiLogIn size={25} /> <span>Login</span>
    </button>
  );
};
export const LogoutButton = () => {
  const logout = useLogout();
  return (
    <button
      className=" w-[100px]  px-2 py-1 bg-button text-white flex  items-center justify-center  rounded-lg shadow-xl font-semibold cursor-pointer hover:shadow-2xl space-x-2"
      onClick={() => logout()}
    >
      <FiLogOut size={25} /> <span>Logout</span>
    </button>
  );
};
