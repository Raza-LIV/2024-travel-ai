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
} from "./MobileTravelItem.styled";

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
  const chooseFlag: React.CSSProperties = {
    backgroundImage: `url(${flagTravel})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className={css([
        isFirst ? first : other,
        TravelContainer,
        isAdd ? add : notAdd,
      ])}
    >
      <div className={flag} style={chooseFlag}></div>
      <div className={content}>
        <div className={css([isAdd ? addColor : labelColor, labelTravel])}>
          {label}
        </div>
        <div className={css([isAdd ? addColor : textColor, generatedTravel])}>
          {generatedTravelText}
        </div>
      </div>
    </div>
  );
};
