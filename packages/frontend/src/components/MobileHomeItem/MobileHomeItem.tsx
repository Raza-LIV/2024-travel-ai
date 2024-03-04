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
import { ROUTES } from "../../constants/roures";

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
  const navigate = useNavigate();
  return (
    <div
      className={
        isPrimary
          ? mobileHomeItemContainerPrimary
          : mobileHomeItemContainerSecondary
      }
      onClick={() => navigate(ROUTES.SAVED)}
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
