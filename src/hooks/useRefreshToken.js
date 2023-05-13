import axios from "../api/axios";

import { useAuth } from "../context/authContext";
const REFRESH_URL = "/auth/refresh";
const useRefreshToken = () => {
  const { setAuth } = useAuth();
  const refresh = async () => {
    const response = await axios.get(REFRESH_URL, {
      withCredentials: true,
    });
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(response.data);
      return {
        ...prev,
        accessToken: response.data.accessToken,
        verified: response.data.verified,
      };
    });
    return response.data.accessToken;
  };
  return refresh;
};
export default useRefreshToken;
