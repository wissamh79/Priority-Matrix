import { useAuth } from "../context/authContext/";
import { NavLink } from "react-router-dom";
//bg-[#6147AA] shadow-lg rounded-tr-[120px]
import { RiArrowRightLine } from "react-icons/ri";
const SideBar = () => {
  const { features, isSide, handleSideBar } = useAuth();

  return (
    <nav
      className={`flex  flex-col items-center justify-start   ease-in-out space-y-7 py-10 px-6${
        isSide ? "  w-[200px]" : "w-[100px]"
      } h-full `}
    >
      <button onClick={handleSideBar}>
        <RiArrowRightLine
          className={`ease-in-out duration-300${isSide ? " rotate-180 " : " "}`}
          size={25}
        />
      </button>
      {/* <p className="font-sans  text-xl    font-medium capitalize my-2 ">
        {isSide ? "dashboard " : ""}
      </p> */}
      <div className="flex flex-col w-full  items-start justify-start bg-secondary rounded-lg space-y-7 px-5 py-6 my-10 ">
        {features.map(({ id, title, to, icon }) => (
          <ul key={id} className=" ">
            <li className="font-sans  text-sm    font-medium capitalize my-2 ">
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? " flex items-center justify-center space-x-2 text-accent text-base rounded font-semibold "
                    : "flex items-center justify-center space-x-2"
                }
              >
                {icon}
                <span>{isSide ? title : " "}</span>
              </NavLink>
            </li>
          </ul>
        ))}
      </div>
    </nav>
  );
};

export default SideBar;
