import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-900">
      <Header />
      <main className="flex-grow relative">
        <div
          className="absolute inset-0 bg-center bg-repeat opacity-80 mix-blend-multiply"
          style={{ backgroundImage: "url('/images/BackgroundPattern.png')" }}
        />
        <div className="relative z-10">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
