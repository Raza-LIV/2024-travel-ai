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
  like,
} from "./MobileTravelItem.styled";
import { AddTravelIcon } from "../../assets/icons/AddTravelIcon";
import { ICON_SIZE } from "../../constants/iconSize";
import { ICurrentTravel } from "../../pages/SavedTravels/SavedTravels";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/roures";
import { LikeIcon } from "../../assets/icons/LikeIcon";
import { useTravel } from "../../hooks/travel.hook";
import { useEffect, useState } from "react";

interface IProps {
  travel?: ICurrentTravel;
  index: number;
}

export const MobileTravelItem = ({ travel, index }: IProps) => {
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
    <>
      {travel ? (
        <div
          onClick={() => {
            navigate(ROUTES.TRAVEL(travel.id));
          }}
          className={css([
            index === 0 ? first : other,
            TravelContainer,
            notAdd,
          ])}
        >
          <div className={css(flag, `background-image: url(${travel.flag})`)}>
            <div
              className={like}
              onClick={(e) => {
                e.stopPropagation();
                setTrigger((prev) => prev + 1);
                setIsLiked((prev) => !prev);
              }}
            >
              <LikeIcon isLiked={isLiked} size={ICON_SIZE[20]} />
            </div>
          </div>
          <div className={content}>
            <div className={css(travel ? labelColor : addColor, labelTravel)}>
              {travel.city}
            </div>
            <div
              className={css(travel ? textColor : addColor, generatedTravel)}
            >
              {travel.text}
            </div>
          </div>
        </div>
      ) : (
        <div
          onClick={() => {
            navigate(ROUTES.GENERATION);
          }}
          className={css([index === 0 ? first : other, TravelContainer, add])}
        >
          <div className={addContainer}>
            <AddTravelIcon size={ICON_SIZE[70]} />
          </div>
          <div className={content}>
            <div className={css(travel ? labelColor : addColor, labelTravel)}>
              {"Add travel"}
            </div>
            <div
              className={css(travel ? textColor : addColor, generatedTravel)}
            >
              Create new travel itineraries. Here, you can input your
              preferences, such as the city and country you want to explore, the
              duration of your stay, and your interests. The system will
              generate a personalized travel route for you based on the provided
              inputs.
            </div>
          </div>
        </div>
      )}
    </>
  );
};
