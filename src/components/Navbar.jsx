import { LoginButton, LogoutButton } from "./LogButtons";
import { useAuth } from "../context/authContext";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { log } = useAuth();
  return (
    <div className=" border-b-2 border-gray-800  bg-primary   w-full flex items-center justify-between mx-4    ">
      <div className="flex justify-start w-full   ">
        <p className="   text-center text-accent font-signature text-sm md:text-2xl font-semibold pr-2 py-2 ">
          <Link to={"tasks"}> Productivity Matrix </Link>
        </p>
      </div>
      <div className="flex justify-center w-full">
        <ThemeToggle />
      </div>
      <div className="flex justify-end w-full  ">
        <div>{log ? <LogoutButton /> : <LoginButton />}</div>
      </div>
    </div>
  );
};

export default Navbar;
