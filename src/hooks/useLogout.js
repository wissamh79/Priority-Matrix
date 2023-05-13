import axios from "../api/axios";
import { useAuth } from "../context/authContext/";

const useLogout = () => {
  const { setAuth, setLog } = useAuth();
  const logout = async () => {
    setAuth({});
    setLog(false);
    try {
      await axios("/auth/logout", {
        withCredentials: true,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return logout;
};

export default useLogout;
