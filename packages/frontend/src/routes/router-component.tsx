import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ROUTES } from "../constants/roures";
import { Home } from "../components/Home/Home";

export const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.EMPTY} element={<Home />} />
        {/* <Route path={ROUTES.HOME} element={<Home />} /> */}
        {/* <Route path={ROUTES.GENERATION} element={< />} />
        <Route path={ROUTES.SAVED} element={< />} />
        <Route path={ROUTES.TRAVEL} element={< />} />
        <Route path={ROUTES.SETTINGS} element={< />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
