import React from "react";
import { useGetWidth } from "../../hooks/get-width.hook";
import { GenerationMobile } from "../GenerationMobile/GenerationMobile";
import { GenerationDesktop } from "../GenerationDesktop/GenerationDesktop";

export const Generation = () => {
  const { windowSize } = useGetWidth();
  const chooseView = () => {
    if (windowSize <= 1190) return <GenerationMobile />;
    return <GenerationDesktop />;
  };
  return chooseView();
};
