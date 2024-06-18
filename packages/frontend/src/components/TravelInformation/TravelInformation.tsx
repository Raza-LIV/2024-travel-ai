import {
  container,
  travelSublabel,
  travelLabelHolder,
  travelLabel,
  labelContainer,
  seperarot,
  travelIconHolder,
  generationHolder,
  disappearContainer,
} from "./TravelInformation.styled";
import { FavoritesIcon } from "../../assets/icons/FavoritesIcon";
import { TravelIcon } from "../TravelIcon/TravelIcon";
import { MealIcon } from "../../assets/icons/MealIcom";
import { HistoryIcon } from "../../assets/icons/HistoryIcon";
import { ChooseDateIcon } from "../../assets/icons/ChooseDateIcon";
import { ClockIcon } from "../ClockIcon";
import { MobileFooter } from "../MobileFooter/MobileFooter";
import { DayPlan } from "../DayPlan/DayPlan";
import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";
import { useModalContent } from "../../store/modalContent";
import { useTravelModal } from "../../store/travelModal";
import { useMaximize } from "../../store/isMaximize";
import { usePlanDay } from "../../store/dayPlan";

interface IProps {
  travelInfo: any;
}

export const TravelInformation = ({ travelInfo }: IProps) => {
  const { dayPlan } = usePlanDay();
  const { isMaximize, setIsMaximize } = useMaximize();
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
    <div className={css(container, `height: ${isMaximize ? 85 : 65}vh;`)}>
      <div
        className={css(
          disappearContainer,
          `opacity: ${isMaximize ? 0 : 1};
            transition-delay: ${isMaximize ? 0 : 500}ms`
        )}
      >
        <div className={travelLabelHolder}>
          <div className={labelContainer}>
            {/* <div className={travelSublabel}>French, Paris</div> */}
            <div className={travelSublabel}>
              {travelInfo
                ? `${travelInfo.country}${
                    travelInfo.city && `, ${travelInfo.city}`
                  }`
                : ""}
            </div>
            <div className={travelLabel}>ART, WINE AND GREAT VIEWS</div>
          </div>
          <FavoritesIcon isPrimaryColor={true} size="45" />
        </div>
        <div className={seperarot} />
        <div className={travelIconHolder}>
          <TravelIcon
            icon={<ChooseDateIcon size={"40"} color={COLORS.PRIMARY} />}
            description={`Month ${travelInfo ? "date" : "4"}`}
            handleClick={() => goToModal(2)}
            changed={isDateChanged}
            size={80}
            fontSize={9}
          />
          <TravelIcon
            icon={<ClockIcon size={"40"} color={COLORS.PRIMARY} />}
            description={"5 days"}
            handleClick={() => goToModal(3)}
            changed={isDurationChanged}
            size={80}
            fontSize={9}
          />
          <TravelIcon
            icon={<MealIcon size={"40"} color={COLORS.PRIMARY} />}
            description={"Restaurants"}
            handleClick={() => goToModal(4)}
            changed={isFoodChanged}
            size={80}
            fontSize={9}
          />
          <TravelIcon
            icon={<HistoryIcon size={"40"} color={COLORS.PRIMARY} />}
            description={"History and Art"}
            handleClick={() => goToModal(5)}
            changed={isArtChanged}
            size={80}
            fontSize={9}
          />
        </div>
        <div className={seperarot} />
      </div>
      <div
        className={css(
          generationHolder,
          `margin: ${isMaximize ? "5px 0 0 0" : "210px 0 0 0"};`
        )}
      >
        {dayPlan.map((item, index) => {
          return (
            <DayPlan
              dayNumber={item.dayNumber}
              description={item.description}
              changed={item.changed ? true : false}
              index={index}
              isMobile={true}
            />
          );
        })}
      </div>
      <MobileFooter
        isMaximizeActive={isMaximize}
        setIsMaximizeActive={setIsMaximize}
      />
    </div>
  );
};
