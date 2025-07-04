import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
/**
 *
 *Home layout componnt is a skeleton compoent, where using navbar we can navigate to other compoent pages
 */
const HomeLayout: React.FC = () => {
  return (
    <>
      {/* nav bar is common to all the pages */}
      <Navbar />
      {/* Outlet will render active child page */}
      <section className="px-16 my-12 w-screen ">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
