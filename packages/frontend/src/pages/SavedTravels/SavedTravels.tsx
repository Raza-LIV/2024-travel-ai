import React from "react";
import { useGetWidth } from "../../hooks/get-width.hook";
import { SavedTravelsDesktop } from "../SavedTravelsDesktop/SavedTravelsDesktop";
import { SavedTravelsMobile } from "../SavedTravelsMobile/SavedTravelsMobile";

export const SavedTravels = () => {
  const { windowSize } = useGetWidth();
  const chooseView = () => {
    if (windowSize <= 1190) return <SavedTravelsMobile />;
    return <SavedTravelsDesktop />;
  };
  return chooseView();
};
