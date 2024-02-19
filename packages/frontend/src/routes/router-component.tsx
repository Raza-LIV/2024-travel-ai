import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "../App";
import { ROUTES } from "../constants/roures";

export const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<App />} />
        {/* <Route path={ROUTES.GENERATION} element={<App />} />
        <Route path={ROUTES.SAVED} element={<App />} />
        <Route path={ROUTES.TRAVEL} element={<App />} />
        <Route path={ROUTES.SETTINGS} element={<App />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
