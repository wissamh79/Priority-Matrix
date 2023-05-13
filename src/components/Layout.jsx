import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

import React from "react";

const Layout = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen w-screen px-6 md:px-16  ">
      <Navbar />
      <div className="h-full w-full flex  items-center justify-center py-2 overflow-auto ">
        <Outlet />
      </div>
      <Footer />
    </section>
  );
};

export default Layout;
