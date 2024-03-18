import { css } from "@emotion/css";
import React from "react";
import {
  description,
  mainQuestion,
  iconContainer,
  iconLine,
  iconDescription,
} from "./GenerationStepContent.styled";
import { useStepperNumber } from "../../store/stepNumber";
import {
  IPasteContent,
  IValues,
} from "../../pages/GenerationDesktop/GenerationDesktop";
import { PlaceIcon } from "../../assets/icons/PlaceIcon";
import { ArtIcon } from "../../assets/icons/ArtIcon";
import { FoodIcon } from "../../assets/icons/FoodIcon";
import { PeriodIcon } from "../../assets/icons/PeriodIcon";
import { DateIcon } from "../../assets/icons/DateIcon";

interface IProps {
  appear: boolean;
  content: IPasteContent;
  values: IValues;
}

export const GenerationStepContent = ({ appear, content, values }: IProps) => {
  const { stepNumber } = useStepperNumber();
  const icons: JSX.Element[] = [
    <PlaceIcon />,
    <DateIcon />,
    <PeriodIcon />,
    <FoodIcon />,
    <ArtIcon />,
  ];
  const pasteText = (index: number) => {
    if (index === 0) return `${values.country}, ${values.city}`;
    if (index === 1) {
      const date = new Date(`${values.date}`);
      const monthNames: string[] = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const monthName = monthNames[date.getMonth()];
      const day = date.getDate();
      return `${monthName} ${day}`;
    }
    if (index === 2) return `${values.duration} Days`;
    if (index === 3) return `${values.food ? "With" : "Without"} restaurants`;
  };
  return (
    <div>
      <div className={iconContainer}>
        {icons.map((icon: JSX.Element, index) => {
          if (index <= stepNumber - 1)
            return (
              <div
                className={css(
                  iconLine,
                  `
                  opacity: ${appear ? 1 : 0};
                  transition-delay: ${appear ? index * 500 + 300 : 0}ms;
                  transition-duration: ${appear ? 500 : 0}ms
                  `
                )}
              >
                <div>{icon}</div>
                <div className={iconDescription}>{pasteText(index)}</div>
              </div>
            );
        })}
      </div>
      <div
        className={css(
          mainQuestion,
          `
          opacity: ${appear ? 1 : 0};
          transition-delay: ${appear ? stepNumber * 500 + 300 : 0}ms;
          transition-duration: ${appear ? 500 : 0}ms
          `
        )}
      >
        {content[stepNumber as keyof IPasteContent].header}
      </div>
      <div
        className={css(
          description,
          `
          opacity: ${appear ? 1 : 0};
          transition-delay: ${appear ? (stepNumber + 1) * 500 + 300 : 0}ms;
          transition-duration: ${appear ? 500 : 0}ms
          `
        )}
      >
        {content[stepNumber as keyof IPasteContent].description}
      </div>
      {content[stepNumber as keyof IPasteContent].step}
    </div>
  );
};
