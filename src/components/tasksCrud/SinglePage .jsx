import { useAuth } from "../../context/authContext";
import useFetch from "../../hooks/useFetch";
import DeleteTask from "../../components/tasksCrud/DeleteTask";

import { AiOutlineEdit } from "react-icons/ai";
const UrgentImportant_TASKS_URL = "/tasks/urgentImportant";
import moment from "moment";
import EditTask from "./EditTask";
import Closure from "../Closure";

const SinglePage = ({ url, name }) => {
  const { edit, setEdit, setId } = useAuth();

  const { isError, isLoading, data, error } = useFetch(url, name);
  if (isLoading) {
    return <div className="flex justify-center items-center"></div>;
  }
  if (isError) {
    console.log("Error:", error);
    // navigate("/login", { state: { from: location }, replace: true });
  }

  return (
    <article className="h-[500px] w-full  overflow-auto scrollbar scrollbar-thumb-gray-100 scrollbar-track-gray-900 pr-6">
      {data?.tasks?.length ? (
        <ol>
          {data.tasks.map((task) => (
            <li key={task._id}>
              <div className="flex  flex-col items-center justify-evenly    flex-wrap md:flex-nowrap border-t-2 border-gray-800 space-y-4 py-2   px-1">
                <div className="   flex items-center justify-between  space-x-2 w-full">
                  <span className=" text-gray-500 text-sm">
                    {moment(task.createdAt).format(" Do MMM , YYYY")}
                  </span>
                  <h1 className="text-xl font-serif title-font ">
                    {task.title}
                  </h1>

                  <div className="   flex space-x-5 ">
                    <EditTask
                      url={UrgentImportant_TASKS_URL}
                      name={"urgentImportant"}
                      id={task._id}
                      title={task.title}
                      details={task.text}
                    />

                    <DeleteTask
                      url={url}
                      name={"UrgentUnimportant"}
                      id={task._id}
                    />
                  </div>
                </div>

                <Closure details={task.text} />
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <div className="h-[450px] w-full  flex  flex-col items-center justify-center">
          <p className="leading-relaxed text-m text-base font-serif font-medium">
            No tasks to display !
          </p>
        </div>
      )}
    </article>
  );
};

export default SinglePage;
