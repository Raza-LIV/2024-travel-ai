import { ReactNode } from "react";
import {
  mobileHomeItemContainerTrue,
  mobileHomeItemContainerFalse,
  cardTop,
  cardTopLabelTrue,
  cardTopLabelFalse,
  cardDescriptionTrue,
  cardDescriptionFalse,
} from "./MobileHomeItem.styled";

interface IProps {
  label: string;
  icon: ReactNode;
  description: string;
  isPrimary: boolean;
}

export const MobileHomeItem = ({
  icon,
  description,
  label,
  isPrimary,
}: IProps) => {
  return (
    <div
      className={
        isPrimary ? mobileHomeItemContainerTrue : mobileHomeItemContainerFalse
      }
    >
      <div className={cardTop}>
        <div className={isPrimary ? cardTopLabelTrue : cardTopLabelFalse}>
          {label}
        </div>
        <div>{icon}</div>
      </div>
      <div className={isPrimary ? cardDescriptionTrue : cardDescriptionFalse}>
        {description}
      </div>
    </div>
  );
};
