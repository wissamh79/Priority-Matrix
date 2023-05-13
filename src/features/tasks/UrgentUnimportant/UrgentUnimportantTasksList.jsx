import AddTask from "../../../components/tasksCrud/AddTask";
import SinglePage from "../../../components/tasksCrud/SinglePage ";
import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
const UrgentUnimportant_TASKS_URL = "/tasks/urgentUnimportant";
const UrgentUnimportantTasksList = () => {
  const navigate = useNavigate();
  return (
    <article className="flex flex-col  items-center justify-center w-full  space-y-4 ">
      <div className="flex  items-center justify-between w-full">
        <button
          onClick={() => navigate(-1)}
          className="w-[75px]  p-1 bg-button text-secondary flex  items-center justify-center  rounded-lg shadow-xl font-bold cursor-pointer hover:shadow-2xl"
        >
          <MdArrowBack size={25} />
        </button>
        <h1 className="  text-xl text-end font-semibold title-font ">
          Plan It
        </h1>
        <AddTask url={UrgentUnimportant_TASKS_URL} name={"UrgentUnimportant"} />
      </div>

      <SinglePage
        url={UrgentUnimportant_TASKS_URL}
        name={"UrgentUnimportant"}
      />
    </article>
  );
};

export default UrgentUnimportantTasksList;
