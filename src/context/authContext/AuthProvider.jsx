// import { useReducer } from "react";
import { useState } from "react";
import AuthContext from "./AuthContext";
// import { reducer, initialState } from "./state";
// import { useQuery } from "react-query";

// import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { MdDateRange, MdAssignment } from "react-icons/md";
import { GrValidate } from "react-icons/gr";
const AuthProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [auth, setAuth] = useState({});

  const [log, setLog] = useState(false);
  const [isSide, setIsSide] = useState(false);
  const features = [
    {
      id: 1,
      title: "Do It",
      to: "/tasks",
      icon: <GrValidate size={25} />,
    },

    {
      id: 2,
      title: "plan it",
      to: "plan-it",
      icon: <MdDateRange size={25} />,
    },
    {
      id: 3,
      title: "Eliminate It",
      to: "eliminate-it",
      icon: <IoMdRemoveCircleOutline size={25} />,
    },
    {
      id: 4,
      title: "delegate it",
      to: "delegate-it",
      icon: <MdAssignment size={25} />,
    },
  ];
  const handleSideBar = () => setIsSide(!isSide);

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
        features,
        isSide,
        handleSideBar,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
