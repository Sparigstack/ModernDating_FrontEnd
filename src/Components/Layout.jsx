import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Layout/Header";
import Footer from "../Pages/Layout/Footer";
import { AuthSwitchContextProvider } from "../Context/AuthSwitchContext";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <div className="container-fluid px-0">
        <AuthSwitchContextProvider>
          <Header />
        </AuthSwitchContextProvider>

        <div className="container-fluid  px-0">
          <main className="LayoutMainDiv">
            {children}
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}
