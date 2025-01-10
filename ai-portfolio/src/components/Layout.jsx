import React from "react";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative text-cs sm:text-sm ">
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
