import useFetch from "../../hooks/useFetch";
import DeleteTask from "../../components/tasksCrud/DeleteTask";
import { useLocation, useNavigate } from "react-router-dom";
import EditTask from "./EditTask";

const GetTasksList = ({ url, name }) => {
  const navigate = useNavigate;
  const location = useLocation;

  const { isError, isLoading, data, error } = useFetch(url, name);
  if (isLoading) {
    console.log("Loading...");
    return (
      <div className="flex justify-center items-center">
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        />
      </div>
    );
  }
  if (isError) {
    console.log("Error:", error);
    navigate("/login", { state: { from: location }, replace: true });
  }

  return (
    <article className="h-[250px] w-[595px] overflow-auto scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-900 scrollbar-rounded px-4">
      {data?.tasks?.length ? (
        <ol>
          {data.tasks.map((task) => (
            <li key={task._id}>
              <div className="flex items-center justify-between  ">
                <h2 className="text-base font-serif title-font truncate  p-2">
                  {task.title}
                </h2>
                {/* <h3>{moment(task.createdAt).format("YYYY,MMM Do ")}</h3>
                <Link to={`${task?._id}/edit`}>
                  <AiOutlineEdit size={20} />
                </Link> */}
                <div className=" flex items-center justify-center space-x-4 mr-2 ">
                  <EditTask
                    url={url}
                    name={name}
                    id={task._id}
                    title={task.title}
                    details={task.text}
                  />
                  <DeleteTask url={url} name={name} id={task._id} />
                </div>
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <div className="h-[190px] w-[400] md:w-[500px] flex  flex-col items-center justify-center">
          <p className="leading-relaxed text-m text-base font-serif font-medium">
            No tasks to display !
          </p>
        </div>
      )}
    </article>
  );
};

export default GetTasksList;
