import { useRef, useState, useEffect } from "react";
import { useAuth } from "../../context/authContext";

import { Link, useNavigate } from "react-router-dom";

import axios from "../../api/axios";
// import circuitPrimary from "../../assist/circuitPrimary.svg";

const LOGIN_URL = "/auth/login";

const Login = () => {
  const { setAuth, persist, setPersist, setLog } = useAuth();
  const navigate = useNavigate();

  const from = "/tasks";

  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const accessToken = response?.data?.accessToken;
      const verified = response?.data?.user.verified;

      setAuth({ email, accessToken, verified });

      setLog(true);

      setEmail(" ");
      setPassword(" ");
      navigate(from, { replace: true });
    } catch (error) {
      if (!error?.response) {
        setErrMsg("No Server Response");
      } else if (error.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (error.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };
  const togglePersist = () => {
    setPersist((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("persist", persist);
  });

  return (
    <section
      // style={{ backgroundImage: `url(${circuitPrimary})` }}
      // bg={circuitPrimary}
      className="flex flex-col items-center justify-center w-full h-full space-y-2   bg-primary "
    >
      <h1 className="text-lg font-bold  title-font">Login</h1>
      <div className="bg-gray-900 dark:bg-gray-300 w-[50%] h-0.5 " />

      <p ref={errRef} className={errMsg ? "block" : " "} aria-live="assertive">
        {errMsg}
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[50%] items-center justify-center   space-y-4   py-2"
      >
        <div className="relative flex flex-col items-start space-y-2 justify-center w-[50%]">
          <label
            htmlFor="loginEmail"
            className="text-sm leading-7 text-gray-400"
          >
            Email{" "}
          </label>
          <input
            type="text"
            id="loginEmail"
            ref={userRef}
            autoComplete="off"
            className="bg-primary w-full border border-gray-400 rounded-lg shadow-xl text-center py-1 px-3 "
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="relative flex flex-col items-start space-y-2 justify-center w-[50%]">
          <label htmlFor="password" className="text-sm leading-7 text-gray-400">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-primary w-full border border-gray-400 rounded-lg shadow-xl text-center py-1 px-3 "
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <div className="flex items-center w-[50%] space-x-2 justify-start form-group form-check">
          <input
            className="w-4 h-4 cursor-pointer form-check-input"
            type="checkbox"
            id="persist"
            onChange={togglePersist}
            checked={persist}
          />
          <label className="inline-block form-check-label " htmlFor=" persist">
            Trust This Device
          </label>
        </div>
        <button
          className=" w-[50%] uppercase  py-2 bg-button text-secondary rounded shadow-xl font-semibold cursor-pointer hover:shadow-2xl"
          disabled={!email || !password ? true : false}
        >
          Sign In
        </button>
      </form>
      <div className="flex items-center justify-center p-2 h-[50px] w-[50%] space-x-2 ">
        <p>You need an Account ? </p>
        <span className="font-bold underline text-accent hover:text-lg ">
          <Link to="/register"> Register Now</Link>
        </span>
      </div>
    </section>
  );
};

export default Login;
