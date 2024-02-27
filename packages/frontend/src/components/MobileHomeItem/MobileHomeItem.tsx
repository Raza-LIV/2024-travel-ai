import { ReactNode } from "react";
import {
  mobileHomeItemContainerPrimary,
  mobileHomeItemContainerSecondary,
  cardTop,
  cardTopLabelPrimary,
  cardTopLabelSecondary,
  cardDescriptionPrimary,
  cardDescriptionSecondary,
} from "./MobileHomeItem.styled";
import { useNavigate } from "react-router-dom";

interface IProps {
  label: string;
  icon: ReactNode;
  description: string;
  isPrimary: boolean;
  nav: string;
}

export const MobileHomeItem = ({
  icon,
  description,
  label,
  isPrimary,
  nav,
}: IProps) => {
  const navigate = useNavigate();
  return (
    <div
      className={
        isPrimary
          ? mobileHomeItemContainerPrimary
          : mobileHomeItemContainerSecondary
      }
      onClick={() => navigate(nav)}
    >
      <div className={cardTop}>
        <div
          className={isPrimary ? cardTopLabelPrimary : cardTopLabelSecondary}
        >
          {label}
        </div>
        <div>{icon}</div>
      </div>
      <div
        className={
          isPrimary ? cardDescriptionPrimary : cardDescriptionSecondary
        }
      >
        {description}
      </div>
    </div>
  );
};
