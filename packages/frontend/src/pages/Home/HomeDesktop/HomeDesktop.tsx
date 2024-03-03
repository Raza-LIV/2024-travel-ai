import React from "react";
import { centerBlock, container, content } from "./HomeDesktop.styled";
import { css } from "@emotion/css";
import { useNavbarActive } from "../../../store/isNavbarOpen";
import { Navbar } from "../../../components/Navbar/Navbar";

export const HomeDesktop = () => {
  const { isNavbarOpen, setIsNavbarOpen } = useNavbarActive();
  return (
    <div className={container}>
      <Navbar />
      <div
        className={css(
          content,
          `width: ${isNavbarOpen ? "calc(100% - 290px)" : "calc(100% - 70px)"}`
        )}
      >
        <div className={centerBlock}></div>
      </div>
    </div>
  );
};
