import { Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";
import React, { Suspense } from "react";

const TasksLayout = () => {
  const { auth } = useAuth();

  return auth?.verified ? (
    <>
      {/* <Suspense
        fallback={
          <div className="flex justify-center items-center">
            <div
              className="flex justify-center items-center spinner-border animate-spin  w-8 h-8 border-4 rounded-full"
              role="status"
            />
          </div>
        }
      > */}
      <Outlet />
      {/* </Suspense> */}
    </>
  ) : (
    <div>
      <p>please check your email to verify account</p>
    </div>
  );
};

export default TasksLayout;
