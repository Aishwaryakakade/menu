import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Loading from "../components/Loading/loading";
/**
 *
 *Home layout componnt is a skeleton compoent, where using navbar we can navigate to other compoent pages
 */
const HomeLayout: React.FC = () => {
  const navigation = useNavigation();
  const ispageLoading = navigation.state === "loading";
  return (
    <>
      {/* nav bar is common to all the pages */}
      <Navbar />
      {/* Outlet will render active child page */}
      <section className="px-16 my-12 w-screen  ">
        {ispageLoading ? <Loading /> : <Outlet />}
      </section>
    </>
  );
};

export default HomeLayout;
