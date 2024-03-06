import { css } from "@emotion/css";
import {
  TravelContainer,
  first,
  other,
  flag,
  content,
  labelTravel,
  addColor,
  generatedTravel,
  notAdd,
  add,
  textColor,
  labelColor,
  addContainer,
} from "./MobileTravelItem.styled";
import { AddTravelIcon } from "../../assets/icons/AddTravel";
import { ICON_SIZE } from "../../constants/iconSize";

interface IProps {
  isFirst: boolean;
  isAdd: boolean;
  label: string;
  generatedTravelText: string;
  flagTravel?: string;
}

export const MobileTravelItem = ({
  isFirst,
  isAdd,
  label,
  generatedTravelText,
  flagTravel,
}: IProps) => {
  return (
    <div
      className={css([
        isFirst ? first : other,
        TravelContainer,
        isAdd ? add : notAdd,
      ])}
    >
      {flagTravel ? (
        <div className={css(flag, `background-image: url(${flagTravel})`)} />
      ) : (
        <div className={addContainer}>
          <AddTravelIcon size={ICON_SIZE[70]} />
        </div>
      )}
      <div className={content}>
        <div className={css(isAdd ? addColor : labelColor, labelTravel)}>
          {label}
        </div>
        <div className={css(isAdd ? addColor : textColor, generatedTravel)}>
          {generatedTravelText}
        </div>
      </div>
    </div>
  );
};
