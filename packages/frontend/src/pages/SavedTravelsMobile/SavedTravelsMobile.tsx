import { TEXT } from "../../constants/text";
import { MobileTravelItem } from "../../components/MobileTravelItem/MobileTravelItem";
import {
  savedContainer,
  savedLayout,
  backIcon,
  travels,
} from "./SavedTravelsMobile.styled";
import { ROUTES } from "../../constants/roures";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ICurrentTravel } from "../SavedTravels/SavedTravels";
import { useTravel } from "../../hooks/travel.hook";
import { ICON_SIZE } from "../../constants/iconSize";
import { COLORS } from "../../constants/colors";
import { IconBack } from "../../assets/icons/IconBack";

export const SavedTravelsMobile = () => {
  const navigate = useNavigate();
  const { allTravels } = useTravel();
  const [mockArr, setMockArr] = useState<ICurrentTravel[]>([]);
  const [counter, setCounter] = useState<number>(0);
  const fetchTravels = async () => {
    const travelList = await allTravels();
    console.log(travelList);
    const updateList: ICurrentTravel[] = travelList.map((travel) => ({
      favorite: travel.favorite,
      city: travel.country,
      text: travel.description,
      flag: `https://flagcdn.com/${travel.country.toLowerCase()}.svg`,
      id: travel.id,
    }));
    console.log("function = ", updateList);
    setMockArr(updateList);
    return updateList;
  };

  useEffect(() => {
    fetchTravels();
  }, []);
  // Same in desktop
  useEffect(() => {
    setCounter(mockArr.length);
  }, [mockArr]);
  return (
    <div className={savedContainer}>
      <div className={backIcon} onClick={() => navigate(ROUTES.HOME)}>
        <IconBack color={COLORS.SECONDARY} size={ICON_SIZE[40]} />
      </div>
      <div className={savedLayout}>{TEXT.SAVED}</div>
      <div className={travels}>
        {mockArr.map((travel, index) => (
          <MobileTravelItem index={index} travel={travel} />
        ))}
        <MobileTravelItem index={counter - 1} travel={undefined} />
      </div>
    </div>
  );
};
