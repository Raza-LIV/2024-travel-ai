import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import {
  centerBlock,
  container,
  content,
  pageName,
  travelsList,
} from "./SavedTravelsDesktop.styled";
import { useNavbarActive } from "../../store/isNavbarOpen";
import { css } from "@emotion/css";
import { TEXT } from "../../constants/text";
import { DesktopTravelItem } from "../../components/DesktopTravelItem/DesktopTravelItem";
import { ICurrentTravel } from "../SavedTravels/SavedTravels";
import { useTravel } from "../../hooks/travel.hook";
import { useLoad } from "../../store/load";
import { Loading } from "../../components/Loading/Loading";

export const SavedTravelsDesktop = () => {
  const { isNavbarOpen } = useNavbarActive();
  const { allTravels } = useTravel();
  const [mockArr, setMockArr] = useState<ICurrentTravel[]>([]);
  const fetchTravels = async () => {
    const travelList = await allTravels();
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
    <div className={container}>
      <Navbar />
      <div
        className={css(
          content,
          `padding-left: ${isNavbarOpen ? "290px" : "70px"}`
        )}
      >
        <div className={centerBlock}>
          {inProcess ? (
            <Loading />
          ) : (
            <>
              <div className={pageName}>{TEXT.SAVED}</div>
              <div className={travelsList}>
                {mockArr.map((travel, index) => (
                  <DesktopTravelItem ownIndex={index} travel={travel} />
                ))}
                <DesktopTravelItem ownIndex={mockArr.length} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
