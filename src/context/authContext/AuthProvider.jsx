// import { useReducer } from "react";
import { useState } from "react";
import AuthContext from "./AuthContext";
// import { reducer, initialState } from "./state";
// import { useQuery } from "react-query";

// import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const AuthProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [auth, setAuth] = useState({});

  const [log, setLog] = useState(false);

  const [persist, setPersist] = useState(
    JSON.parse(localStorage.getItem("persist")) || false
  );
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        persist,
        setPersist,
        edit,
        setEdit,
        id,
        setId,
        log,
        setLog,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
