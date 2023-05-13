import GetTasksList from "../../components/tasksCrud/GetTasksList";
import { Link } from "react-router-dom";
import AddTask from "../../components/tasksCrud/AddTask";
import {
  URGENT_IMPORTANT_TASKS_URL,
  URGENT_UNIMPORTANT_TASKS_URL,
  UNURGENT_IMPORTANTt_TASKS_URL,
  UNURGENT_UNIMPORTANT_TASKS_URL,
} from "../../constants/api";

const TasksList = () => {
  return (
    <section className="grid grid-rows-2 md:grid-flow-col gap-4 w-full h-full ">
      <div className="flex flex-col w-full h-full items-center justify-center  rounded-lg shadow-xl bg-secondary px-2 py-2 space-y-1">
        <div className="flex items-center justify-between w-full px-4">
          <h1 className="text-xl font-sans title-font text-accent  text-start font-semibold">
            <Link to={"do-it"}>Do It</Link>
          </h1>
          <AddTask url={URGENT_IMPORTANT_TASKS_URL} name={"urgentImportant"} />
        </div>

        <GetTasksList
          url={URGENT_IMPORTANT_TASKS_URL}
          name={"urgentImportant"}
        />
      </div>
      <div className="flex flex-col w-full h-full items-center justify-center  rounded-lg shadow-xl bg-secondary space-y-1 px-2 py-2">
        <div className="flex items-center  justify-between w-full px-4 ">
          <h1 className="text-xl font-sans title-font text-accent font-semibold  ">
            <Link to={"plan-it"}>Plan It</Link>{" "}
          </h1>
          <AddTask
            url={URGENT_UNIMPORTANT_TASKS_URL}
            name={"UrgentUnimportant"}
          />
        </div>
        <GetTasksList
          url={URGENT_UNIMPORTANT_TASKS_URL}
          name={"UrgentUnimportant"}
        />
      </div>
      <div className="flex flex-col w-full h-full items-center justify-center  rounded-lg shadow-xl bg-secondary px-2 py-2">
        <div className="flex items-center justify-between w-full px-4">
          <h2 className="text-xl font-sans title-font text-accent font-semibold  ">
            <Link to={"eliminate-it"}>Eliminate It</Link>
          </h2>
          <AddTask
            url={UNURGENT_IMPORTANTt_TASKS_URL}
            name={"UnurgentImportant"}
          />
        </div>
        <GetTasksList
          url={UNURGENT_IMPORTANTt_TASKS_URL}
          name={"UnurgentImportant"}
        />
      </div>
      <div className="flex flex-col w-full h-full items-center justify-center  rounded-lg shadow-xl bg-secondary px-2 py-2 ">
        <div className="flex items-center justify-between w-full px-4">
          <h1 className="text-xl font-sans title-font text-accent font-semibold  ">
            <Link to={"delegate-it"}>Delegate It</Link>
          </h1>
          <AddTask
            url={UNURGENT_UNIMPORTANT_TASKS_URL}
            name={"UnurgentUnimportant"}
          />
        </div>

        <GetTasksList
          url={UNURGENT_UNIMPORTANT_TASKS_URL}
          name={"UnurgentUnimportant"}
        />
      </div>
    </section>
  );
};

export default TasksList;
