import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "./organisms";

const Layout = () => {
  return (
    <>
      <Header.Primary />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
