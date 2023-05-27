import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import TasksLayout from "./components/TasksLayout";

import Register from "./features/auth/Register";
import Login from "./features/auth/Login";
import EmailVerify from "./features/auth/EmailVerify";
import Welcome from "./features/Welcome";
import RequireAuth from "./components/RequireAuth";
import PersistLogin from "./components/PersistLogin";
import TasksList from "./features/tasks/TasksList";
import Unauthorized from "./components/Unauthorized";
import Missing from "./components/Missing";

const UrgentImportantTasksList = lazy(() =>
  import("./features/tasks/UrgentImportant/UrgentImportantTasksList")
);

const UrgentUnimportantTasksList = lazy(() =>
  import("./features/tasks/UrgentUnimportant/UrgentUnimportantTasksList")
);

const UnurgentImportantTasksList = lazy(() =>
  import("./features/tasks/UnurgentImportant/UnurgentImportantTasksList")
);

const UnurgentUnimportantTasksList = lazy(() =>
  import("./features/tasks/UnurgentUnimportant/UnurgentUnimportantTasksList")
);

function App() {
  return (
    <Suspense
      fallback={<div className="flex justify-center items-center"></div>}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          {/* <Route index element={<Welcome />} /> */}
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="api/v1/auth/:id/verify/:verifyToken/"
            element={<EmailVerify />}
          />
          <Route path="unauthorized" element={<Unauthorized />} />
          {/* protect routes */}
          <Route element={<PersistLogin />}>
            <Route path="tasks" element={<RequireAuth />}>
              {/* <Route path="tasks" element={<TasksLayout />}> */}
              {"//DoIt "}
              <Route index element={<UrgentImportantTasksList />} />
              {/* <Route path="do-it" element={<UrgentImportantTasksList />} /> */}
              {"//PlanIt "}
              <Route path="plan-it" element={<UrgentUnimportantTasksList />} />
              {" //EliminateIt"}
              <Route
                path="eliminate-it"
                element={<UnurgentImportantTasksList />}
              />
              {"//DelegateIt"}
              <Route
                path="delegate-it"
                element={<UnurgentUnimportantTasksList />}
              />
              {/* </Route> */}
            </Route>
          </Route>

          {/* End Tasks */}
          {/* catch all */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
