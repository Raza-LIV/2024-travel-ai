import { css } from "@emotion/css";
import { Navbar } from "../../components/Navbar/Navbar";
import {
  centerBlock,
  container,
  content,
  pageName,
  travelContainer,
} from "./FavoritesDesktop.styled";
import { useNavbarActive } from "../../store/isNavbarOpen";
import { TEXT } from "../../constants/text";
import { useEffect, useState } from "react";
import { ICurrentTravel } from "../SavedTravels/SavedTravels";
import { DesktopTravelItem } from "../../components/DesktopTravelItem/DesktopTravelItem";
import { useTravel } from "../../hooks/travel.hook";

export const FavoritesDesktop = () => {
  const { isNavbarOpen } = useNavbarActive();
  const { getFavoriteTravels } = useTravel();
  // Same in mobile
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
  useEffect(() => {
    fetchTravels();
  }, []);
  return (
    <div className={container}>
      <Navbar />
      <div
        className={css(
          content,
          `padding-left: ${isNavbarOpen ? "290px" : "70px"}`
        )}
      >
        <div className={centerBlock}>
          <div className={pageName}>{TEXT.FAVORITES}</div>
          <div className={travelContainer}>
            {mockArr.map((travel, index) => (
              <DesktopTravelItem ownIndex={index} travel={travel} />
            ))}
            <DesktopTravelItem ownIndex={mockArr.length} />
          </div>
        </div>
      </div>
    </div>
  );
};
