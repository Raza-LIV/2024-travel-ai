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
import { ICurrentHomeItem } from "../../types/home.types";

export const MobileHomeItem = ({
  icon,
  description,
  label,
  isPrimary,
  nav,
}: ICurrentHomeItem) => {
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
