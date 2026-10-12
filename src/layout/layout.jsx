import React from "react";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

import { Outlet } from "react-router-dom";
const MainLayout = ({ children }) => {
  return (
    <>
      {/* Ensure header is properly positioned */}
      <Header />
      {/* Apply proper styles to main */}
      <main className="min-h-screen w-full overflow-y-auto relative">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
