import { useRef, useState, useEffect } from "react";
import axios from "../../api/axios";
import { Link } from "react-router-dom";

import { FcCheckmark } from "react-icons/fc";

// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/auth/register";
const Register = () => {
  // const location = useLocation;
  // const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  // const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatchPwd, setValidMatchPwd] = useState(false);
  const [matchPwdFocus, setMatchPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(password));
    setValidMatchPwd(password === matchPwd);
  }, [password, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [email, password, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //if button enabled with JS hack

    const v1 = EMAIL_REGEX.test(email);
    const v2 = PWD_REGEX.test(password);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ firstName, lastName, email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response.data);

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setMatchPwd("");
      console.log(response.data.message);
      setMsg(response.data.message);
    } catch (error) {
      if (!error?.response) {
        setErrMsg("No Server Response");
      } else if (error.response?.status === 400) {
        setErrMsg("Email Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };
  return (
    <section className="flex flex-col items-center justify-center w-full bg-primary space-y-2">
      <h1 className=" text-lg font-bold title-font">Register</h1>
      <div className="bg-gray-900 dark:bg-gray-300 w-[50%] h-0.5 " />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[50%]  items-center justify-center     space-y-4  py-5"
      >
        <div className="flex w-[50%]  items-center justify-center  space-x-2 ">
          <div className="flex flex-col items-start justify-center  w-full  space-y-2">
            <label htmlFor="firstName">First Name </label>
            <input
              type="text"
              id="firstName"
              ref={userRef}
              autoComplete="off"
              className="bg-primary w-full  py-1 px-3 border border-gray-400 rounded-lg shadow-xl text-center"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              required
            />
          </div>
          <div className="flex flex-col items-start justify-center  w-full  space-y-2">
            <label htmlFor="lastName">Last Name</label>

            <input
              type="text"
              id="lastName"
              autoComplete="off"
              className="bg-primary w-full  py-1 px-3 border border-gray-400 rounded-lg shadow-xl text-center"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              required
            />
          </div>
        </div>
        <div className="flex flex-col items-start  justify-center w-[50%] space-y-2">
          <div className="flex  items-center justify-start w-full space-x-2 ">
            <label className=" " htmlFor="email">
              Email
            </label>
            <div className="">
              {validEmail && email ? (
                <FcCheckmark className="pointer-events-none  " />
              ) : (
                " "
              )}
            </div>
          </div>
          <input
            type="text"
            id="email"
            autoComplete="off"
            className="bg-primary w-full  py-1 px-3 border border-gray-400 rounded-lg shadow-xl text-center"
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
            value={email}
            required
            aria-invalid={validEmail ? "false" : "true"}
          />
        </div>
        <div className="flex flex-col items-start justify-center w-[50%] space-y-2 ">
          <div className="flex  items-center justify-start w-full space-x-2 ">
            <label className="" htmlFor="pwd">
              Password
            </label>
            <div className="">
              {validPwd && password ? (
                <FcCheckmark className="pointer-events-none  " />
              ) : (
                " "
              )}
            </div>
          </div>

          <input
            type="password"
            id="pwd"
            className="bg-primary w-full  py-1 px-3 border border-gray-400 rounded-lg shadow-xl text-center"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
          />
        </div>
        <p id="pwdnote" className={pwdFocus && !validPwd ? "block" : "hidden"}>
          8 to 24 characters,a-A and special character @,#,$,%
        </p>
        <div className="flex flex-col items-start justify-center w-[50%] space-y-2 ">
          <div className="flex  items-center justify-start w-full space-x-2 ">
            <label className="" htmlFor="confirm_pwd">
              Confirm Password
            </label>
            <div className="">
              {validMatchPwd && matchPwd ? (
                <FcCheckmark className="pointer-events-none  " />
              ) : (
                " "
              )}
            </div>
          </div>

          <input
            type="password"
            id="confirm_pwd"
            className="w-full bg-primary  py-1 px-3 border border-gray-400 rounded-lg  shadow-xl text-center"
            onChange={(e) => setMatchPwd(e.target.value)}
            value={matchPwd}
            required
            aria-invalid={validMatchPwd ? "false" : "true"}
            aria-describedby="confirmnote"
            onFocus={() => setMatchPwdFocus(true)}
            onBlur={() => setMatchPwdFocus(false)}
          />

          <p
            id="confirmnote"
            className={matchPwdFocus && !validMatchPwd ? "block" : "hidden"}
          >
            Must match the first password input field.
          </p>
        </div>

        <button
          className=" w-[50%] py-2 bg-button text-secondary rounded shadow-xl font-semibold cursor-pointer hover:shadow-2xl"
          disabled={
            !lastName || !validEmail || !validPwd || !validMatchPwd
              ? true
              : false
          }
        >
          Sign Up
        </button>
      </form>
      <div className="flex items-center justify-center p-2 h-[50px] w-[50%]  space-x-2">
        <p>Already registered ?</p>
        <span className="text-accent font-bold underline hover:text-lg ">
          <Link to="/login"> Log In</Link>
        </span>
      </div>
      <p
        ref={errRef}
        className={msg ? "block bg-green-800 px-3 py-2 rounded " : "hidden"}
        aria-live="assertive"
      >
        {msg}
      </p>
      <p
        ref={errRef}
        className={errMsg ? "block bg-red-800 px-3 py-2 rounded " : "hidden"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
    </section>
  );
};

export default Register;
