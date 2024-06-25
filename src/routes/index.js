import * as React from "react";
import { Routes, Route } from "react-router-dom";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ErrorPage from "../pages/ErrorPage";
import AuthRequire from "./AuthRequire";
import MainHeader from "../layouts/MainHeader";

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthRequire>
            <MainHeader />
          </AuthRequire>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="product/:id" element={<DetailPage />} />
      </Route>

      <Route element={<MainHeader />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default Router;