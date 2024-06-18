import {
  container,
  description,
  flag,
  lastContainer,
  addTravel,
  addNewTravelText,
  like,
} from "./DesktopTravelItem.styled";
import { DesktopTravelDescription } from "../DesktopTravelDescription/DesktopTravelDescription";
import { css } from "@emotion/css";
import { ICON_SIZE } from "../../constants/iconSize";
import { TEXT } from "../../constants/text";
import { AddTravelIcon } from "../../assets/icons/AddTravelIcon";
import { ICurrentTravel } from "../../pages/SavedTravels/SavedTravels";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/roures";
import { LikeIcon } from "../../assets/icons/LikeIcon";
import { useTravel } from "../../hooks/travel.hook";
import { useEffect, useState } from "react";

interface IProps {
  travel?: ICurrentTravel;
  ownIndex: number;
}

export const DesktopTravelItem = ({ travel, ownIndex }: IProps) => {
  const navigate = useNavigate();
  const { likeTravel } = useTravel();
  const likeCurrentTravel = async () => {
    if (travel) {
      console.log(`trvel was = ${travel.favorite}`);
      await likeTravel(travel.id);
      console.log(`Was liked ${travel.id}`);
      console.log(`trvel = ${travel.favorite}`);
    }
  };
  const [isLiked, setIsLiked] = useState<boolean>(
    travel ? travel.favorite : false
  );
  const [trigger, setTrigger] = useState<number>(0);
  useEffect(() => {
    if (trigger !== 0) {
      likeCurrentTravel();
    }
  }, [trigger]);
  return (
    <div>
      {travel ? (
        <div
          onClick={() => navigate(ROUTES.TRAVEL(travel.id))}
          className={css(
            container,
            `border-radius: ${ownIndex === 0 ? 30 : 10}px ${
              ownIndex === 2 ? 30 : 10
            }px 10px 10px`
          )}
        >
          <div
            className={like}
            onClick={(e) => {
              e.stopPropagation();
              setTrigger((prev) => prev + 1);
              setIsLiked((prev) => !prev);
            }}
          >
            <LikeIcon isLiked={isLiked} size={ICON_SIZE[30]} />
          </div>
          <div
            className={css(flag, `background-image: url(${travel.flag})`)}
          ></div>
          <div className={description}>
            <DesktopTravelDescription travelDescription={travel} />
          </div>
        </div>
      ) : (
        <div
          onClick={() => {
            navigate(ROUTES.GENERATION);
          }}
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
