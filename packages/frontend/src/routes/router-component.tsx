import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { ROUTES } from "../constants/roures";
import { Home } from "../pages/Home/Home";
import { SavedTravels } from "../pages/SavedTravels/SavedTravels";
import { Generation } from "../pages/Generation/Generation";
import { FavoritesDesktop } from "../pages/FavoritesDesktop/FavoritesDesktop";
import { SettingsDesktop } from "../pages/SettingsDesktop/SettingsDesktop";

export const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.EMPTY} element={<Navigate to={ROUTES.HOME} />} />
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SAVED} element={<SavedTravels />} />
        <Route path={ROUTES.GENERATION} element={<Generation />} />
        <Route path={ROUTES.FAVORITES} element={<FavoritesDesktop />} />
        <Route path={ROUTES.SETTINGS} element={<SettingsDesktop />} />
      </Routes>
    </BrowserRouter>
  );
};
