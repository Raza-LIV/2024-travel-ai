// import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { ROUTES } from "../constants/roures";
import { Home } from "../pages/Home/Home";
import { SavedTravels } from "../pages/SavedTravels/SavedTravels";
// import { useGetWidth } from "../hooks/get-width.hook";

export const RouterComponent = () => {
  //   const { windowSize } = useGetWidth();
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.EMPTY} element={<Navigate to={ROUTES.HOME} />} />
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SAVED} element={<SavedTravels />} />
        {/* <Route path={ROUTES.GENERATION} element={< />} />
        <Route path={ROUTES.TRAVEL} element={< />} />
        <Route path={ROUTES.SETTINGS} element={< />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
