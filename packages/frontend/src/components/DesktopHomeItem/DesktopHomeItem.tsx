import { useNavigate } from "react-router-dom";
import {
  cardDescriptionPrimary,
  cardDescriptionSecondary,
  cardTop,
  cardTopLabelPrimary,
  cardTopLabelSecondary,
  desktopHomeItemContainerPrimary,
  desktopHomeItemContainerSecondary,
} from "./DesktopHomeItem.styled";
import { ICurrentHomeItem } from "../../types/home.types";

export const DesktopHomeItem = ({
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
          ? desktopHomeItemContainerPrimary
          : desktopHomeItemContainerSecondary
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
