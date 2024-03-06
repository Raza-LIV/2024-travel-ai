import React from "react";
import {
  container,
  description,
  flag,
  lastContainer,
  addTravel,
  addNewTravelText,
} from "./DesktopTravelItem.styled";
import { DesktopTravelDescription } from "../DesktopTravelDescription/DesktopTravelDescription";
import { ConcreteTravel } from "../../pages/SavedTravelsDesktop/SavedTravelsDesktop";
import { css } from "@emotion/css";
import { ICON_SIZE } from "../../constants/iconSize";
import { TEXT } from "../../constants/text";
import { AddTravelIcon } from "../../assets/icons/AddTravel";

interface IProps {
  travel?: ConcreteTravel;
  ownIndex: number;
}

export const DesktopTravelItem = ({ travel, ownIndex }: IProps) => {
  return (
    <div>
      {travel ? (
        <div
          className={css(
            container,
            `border-radius: ${ownIndex === 0 ? 30 : 10}px ${
              ownIndex === 2 ? 30 : 10
            }px 10px 10px`
          )}
        >
          <div
            className={css(flag, `background-image: url(${travel.flag})`)}
          ></div>
          <div className={description}>
            <DesktopTravelDescription travelDescription={travel} />
          </div>
        </div>
      ) : (
        <div
          className={css(
            lastContainer,
            `border-radius: 10px ${ownIndex === 2 ? 30 : 10}px 10px 10px`
          )}
        >
          <div className={addTravel}>
            <AddTravelIcon size={ICON_SIZE[60]} />
          </div>
          <div className={addNewTravelText}>{TEXT.ADD_TRAVEL}</div>
        </div>
      )}
    </div>
  );
};
