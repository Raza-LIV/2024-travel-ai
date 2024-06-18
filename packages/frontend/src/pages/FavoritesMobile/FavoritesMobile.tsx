import { useNavigate } from "react-router-dom";
import { MobileTravelItem } from "../../components/MobileTravelItem/MobileTravelItem";
import { ROUTES } from "../../constants/roures";
import {
  backIcon,
  favoriteContainer,
  favoriteLayout,
  travels,
} from "./FavoritesMobile.styled";
import { TEXT } from "../../constants/text";
import { useTravel } from "../../hooks/travel.hook";
import { useEffect, useState } from "react";
import { ICurrentTravel } from "../SavedTravels/SavedTravels";
import { useLoad } from "../../store/load";
import { Loading } from "../../components/Loading/Loading";
import { IconBack } from "../../assets/icons/IconBack";
import { COLORS } from "../../constants/colors";
import { ICON_SIZE } from "../../constants/iconSize";

export const FavoritesMobile = () => {
  const navigate = useNavigate();
  const { getFavoriteTravels } = useTravel();
  const [mockArr, setMockArr] = useState<ICurrentTravel[]>([]);
  const fetchTravels = async () => {
    const travelList = await getFavoriteTravels();
    const updateList: ICurrentTravel[] = travelList.map((travel) => ({
      favorite: travel.favorite,
      city: travel.country,
      text: travel.description,
      flag: `https://flagcdn.com/${travel.country.toLowerCase()}.svg`,
      id: travel.id,
    }));
    setMockArr(updateList);
    return updateList;
  };
  const { inProcess, setInProcess } = useLoad();
  useEffect(() => {
    setInProcess(true);
    fetchTravels();
    setInProcess(false);
  }, []);
  return (
    <div className={favoriteContainer}>
      <div className={backIcon} onClick={() => navigate(ROUTES.HOME)}>
        <IconBack color={COLORS.SECONDARY} size={ICON_SIZE[40]} />
      </div>
      {inProcess ? (
        <Loading />
      ) : (
        <>
          <div className={favoriteLayout}>{TEXT.FAVORITES}</div>
          <div className={travels}>
            {mockArr.map((travel, index) => (
              <MobileTravelItem index={index} travel={travel} />
            ))}
            <MobileTravelItem index={mockArr.length - 1} travel={undefined} />
          </div>
        </>
      )}
    </div>
  );
};
