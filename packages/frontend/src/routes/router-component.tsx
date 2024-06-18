import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { ROUTES } from "../constants/roures";
import { Home } from "../pages/Home/Home";
import { SavedTravels } from "../pages/SavedTravels/SavedTravels";
import { Generation } from "../pages/Generation/Generation";
import { Travel } from "../pages/Travel/Travel";
import { TestReg } from "../pages/TestReg/TestReg";
import { Settings } from "../pages/Settings/Settings";
import { Favorites } from "../pages/Favorites/Favorites";

export const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path={ROUTES.EMPTY} element={<Navigate to={ROUTES.TRAVEL} />} /> */}
        <Route
          path={ROUTES.EMPTY}
          element={<Navigate to={ROUTES.TEST_REG} />}
        />
        <Route path={ROUTES.TEST_REG} element={<TestReg />} />
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SAVED} element={<SavedTravels />} />
        <Route path={ROUTES.GENERATION} element={<Generation />} />
        <Route path={ROUTES.FAVORITES} element={<Favorites />} />
        <Route path={ROUTES.SETTINGS} element={<Settings />} />
        {/* <Route path={ROUTES.TRAVEL} element={<Travel />} /> */}
        <Route path={"/travel/:id"} element={<Travel />} />
      </Routes>
    </BrowserRouter>
  );
};
