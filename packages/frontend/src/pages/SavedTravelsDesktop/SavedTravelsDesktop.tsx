import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import {
  centerBlock,
  container,
  content,
  pageName,
  travelsList,
} from "./SavedTravelsDesktop.styled";
import { useNavbarActive } from "../../store/isNavbarOpen";
import { css } from "@emotion/css";
import { TEXT } from "../../constants/text";
import { DesktopTravelItem } from "../../components/DesktopTravelItem/DesktopTravelItem";
import london from "../../assets/icons/London.png";
import paris from "../../assets/icons/Paris.png";

export interface ConcreteTravel {
  city: string;
  text: string;
  flag: string;
}

export const SavedTravelsDesktop = () => {
  const { isNavbarOpen } = useNavbarActive();

  const travelToLondon: ConcreteTravel = {
    city: TEXT.LONDON,
    text: TEXT.LONDON_DESCRIPTION,
    flag: london,
  };

  const travelToParis: ConcreteTravel = {
    city: TEXT.PARIS,
    text: TEXT.PARIS_DESCRIPTION,
    flag: paris,
  };

  const mockArr: ConcreteTravel[] = [
    travelToLondon,
    travelToParis,
    travelToParis,
  ];

  return (
    <div className={container}>
      <Navbar />
      <div
        className={css(
          content,

          `padding-left: ${isNavbarOpen ? "290px" : "70px"}`
        )}
      >
        <div className={centerBlock}>
          <div className={pageName}>{TEXT.SAVED}</div>
          <div className={travelsList}>
            {mockArr.map((travel, index) => (
              <DesktopTravelItem ownIndex={index} travel={travel} />
            ))}
            <DesktopTravelItem ownIndex={mockArr.length} />
          </div>
        </div>
      </div>
    </div>
  );
};
