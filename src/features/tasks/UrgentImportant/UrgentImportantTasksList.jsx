import AddTask from "../../../components/tasksCrud/AddTask";
import SinglePage from "../../../components/tasksCrud/SinglePage ";
import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
const UrgentImportant_TASKS_URL = "/tasks/urgentImportant";
const UrgentImportantTasksList = () => {
  const navigate = useNavigate();
  return (
    <article className="flex flex-col   items-center justify-center w-full space-y-4  ">
      <div className="flex  items-center justify-between w-full">
        <button
          onClick={() => navigate(-1)}
          className="w-[75px]  p-1 bg-button text-secondary flex  items-center justify-center  rounded-lg shadow-xl font-bold cursor-pointer hover:shadow-2xl"
        >
          <MdArrowBack size={25} />
        </button>

        <h1 className="  text-xl text-end font-semibold title-font ">Do It</h1>
        <div>
          <AddTask url={UrgentImportant_TASKS_URL} name={"urgentImportant"} />
        </div>
      </div>

      <SinglePage url={UrgentImportant_TASKS_URL} name={"urgentImportant"} />
    </article>
  );
};

export default UrgentImportantTasksList;
