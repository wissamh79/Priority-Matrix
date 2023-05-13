import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import { useAuth } from "../context/authContext";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth, persist, setLog } = useAuth();

  useEffect(() => {
    let isMounted = true;
    const verifyRefreshToken = async () => {
      try {
        // eslint-disable-next-line
        await refresh();
        setLog(true);
      } catch (error) {
        console.error(error);
      } finally {
        isMounted && setIsLoading(false);
      }
    };
    // Avoids unwanted call to verifyRefreshToken
    // eslint-disable-next-line
    !auth?.accessToken && persist ? verifyRefreshToken() : setIsLoading(false);

    return () => (isMounted = false);
  }, []);
  return (
    <div className="flex justify-center items-center w-full h-full ">
      {!persist ? (
        <Outlet />
      ) : isLoading ? (
        <div className="flex justify-center items-center w-full h-full ">
          <div
            className="flex justify-center items-center spinner-border animate-spin  w-8 h-8 border-4 rounded-full"
            role="status"
          />
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default PersistLogin;
