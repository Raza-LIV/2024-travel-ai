import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import {
  backgroundHolder,
  backgroundImage,
  centerBlock,
  container,
  content,
  daysContainer,
  itemsHolder,
  seperarot,
  travelLabel,
  travelSublabel,
} from "./TravelDesktop.styled";
import { css } from "@emotion/css";
import { useNavbarActive } from "../../store/isNavbarOpen";
// import ImageBg from "../../assets/images/bg.png";
import { TravelIcon } from "../../components/TravelIcon/TravelIcon";
import { COLORS } from "../../constants/colors";
import { ChooseDateIcon } from "../../assets/icons/ChooseDateIcon";
import { ClockIcon } from "../../components/ClockIcon";
import { MealIcon } from "../../assets/icons/MealIcom";
import { HistoryIcon } from "../../assets/icons/HistoryIcon";
import { useModalContent } from "../../store/modalContent";
import { useTravelModal } from "../../store/travelModal";
import { DayPlan } from "../../components/DayPlan/DayPlan";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading";
import { useTravel } from "../../hooks/travel.hook";
import { usePlanDay } from "../../store/dayPlan";
import { useLoad } from "../../store/load";

export const TravelDesktop = () => {
  const { dayPlan } = usePlanDay();
  const { id } = useParams<string>();
  const { getTravelInformatiom } = useTravel();
  const [travelInfo, setTravelInfo] = useState<any>(null);
  const [placeImage, setPlaceImage] = useState<string>("");
  const { inProcess, setInProcess } = useLoad();

  useEffect(() => {
    const fetchTravelInfo = async () => {
      if (id) {
        setInProcess(true);
        console.log(`id = ${id}`);
        console.log(await getTravelInformatiom(id));
        const { travel, image } = await getTravelInformatiom(id);
        setPlaceImage(image);
        setTravelInfo(travel);
      } else {
        alert("This id dose not exsists");
      }
    };
    fetchTravelInfo().then(() => {
      setInProcess(false);
    });
  }, [id]);
  const { isNavbarOpen } = useNavbarActive();
  const {
    setContentNumber,
    isDateChanged,
    isDurationChanged,
    isFoodChanged,
    isArtChanged,
  } = useModalContent();
  const { setIsModalVisible } = useTravelModal();
  const goToModal = (num: number) => {
    setIsModalVisible(true);
    setContentNumber(num);
  };
  return (
    <div className={container}>
      <Navbar />
      <div
        className={css(content, `padding-left: ${isNavbarOpen ? 290 : 70}px`)}
      >
        {!inProcess ? (
          <div className={centerBlock}>
            <div className={backgroundHolder}>
              <img className={backgroundImage} src={placeImage} alt="123" />
              <div className={itemsHolder}>
                <TravelIcon
                  size={100}
                  fontSize={12}
                  icon={<ChooseDateIcon size={"40"} color={COLORS.PRIMARY} />}
                  description={`Month ${travelInfo ? "date" : "4"}`}
                  handleClick={() => goToModal(2)}
                  changed={isDateChanged}
                />
                <TravelIcon
                  size={100}
                  fontSize={12}
                  icon={<ClockIcon size={"40"} color={COLORS.PRIMARY} />}
                  description={`${dayPlan.length} days`}
                  handleClick={() => goToModal(3)}
                  changed={isDurationChanged}
                />
                <TravelIcon
                  size={100}
                  fontSize={12}
                  icon={<MealIcon size={"40"} color={COLORS.PRIMARY} />}
                  description={"Restaurants"}
                  handleClick={() => goToModal(4)}
                  changed={isFoodChanged}
                />
                <TravelIcon
                  size={100}
                  fontSize={12}
                  icon={<HistoryIcon size={"40"} color={COLORS.PRIMARY} />}
                  description={"History and Art"}
                  handleClick={() => goToModal(5)}
                  changed={isArtChanged}
                />
              </div>
            </div>
            {/* <div className={travelSublabel}>French, Paris</div> */}
            <div className={travelSublabel}>
              {travelInfo
                ? `${travelInfo.country}${
                    travelInfo.city && `, ${travelInfo.city}`
                  }`
                : ""}
            </div>
            <div className={travelLabel}>ART, WINE AND GREAT VIEWS</div>
            <div className={seperarot} />
            <div className={daysContainer}>
              {dayPlan.map((item, index) => {
                return (
                  <DayPlan
                    dayNumber={item.dayNumber}
                    description={item.description}
                    changed={item.changed ? true : false}
                    index={index}
                    isMobile={false}
                  />
                );
              })}
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};
