import React, { useState } from "react";
import {
  container,
  cityName,
  dragZone,
  description,
  descriptionContainer,
} from "./DesktopTravelDescription.styled";
import { css } from "@emotion/css";
import { ICurrentTravel } from "../../pages/SavedTravelsDesktop/SavedTravelsDesktop";

interface IProps {
  travelDescription: ICurrentTravel;
}

export const DesktopTravelDescription = ({ travelDescription }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      className={css(container, `height: ${isOpen ? 185 : 70}px`)}
      onMouseOver={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={dragZone} />
      <div className={cityName}>{travelDescription.city}</div>
      <div
        className={css(descriptionContainer, `height: ${isOpen ? 140 : 0}px`)}
      >
        <div className={css(description, `opacity: ${isOpen ? 1 : 0}`)}>
          {travelDescription.text}
        </div>
      </div>
    </div>
  );
};
