import React from "react";
import { useGetWidth } from "../../hooks/get-width.hook";

export const Home = () => {
  const { windowSize } = useGetWidth();
  return <div>{windowSize}</div>;
};
