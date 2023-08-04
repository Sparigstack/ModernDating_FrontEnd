import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import RequiredAuth from "./Pages/Authentication/RequiredAuth";
import AdminPage from "./Pages/AdminPage";

function App() {
  console.log(process.env.BASE_URL);
  return (
    <React.Fragment>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/login" element={<DashBoard />} />
              <Route path="/" element={<DashBoard />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/unauthorized" element={<UnauthorizePage />} />
              <Route element={<RequiredAuth />}>
                <Route path="/Admin" element={<AdminPage />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </React.Fragment>
  );
}
import NotFound from "./Pages/NotFound";
import NotFoundPage from "./Pages/NotFound";
import UnauthorizePage from "./Pages/UnauthorizePage";
import Login from "./Pages/Authentication/Login";
import DashBoard from "./Pages/DashBoard";
import { AuthContext, AuthContextProvider } from "./Context/AuthContext";

export default App;
