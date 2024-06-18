import { iconHolder } from "./SettingsContent.styled";
import { IconItem } from "../IconItem/IconItem";
import { COLORS } from "../../constants/colors";
import { ChooseDateIcon } from "../../assets/icons/ChooseDateIcon";
import { ClockIcon } from "../ClockIcon";
import { MealIcon } from "../../assets/icons/MealIcom";
import { HistoryIcon } from "../../assets/icons/HistoryIcon";
import { useTravelModal } from "../../store/travelModal";
import { useModalContent } from "../../store/modalContent";

export const SettingsContent = () => {
  const { setIsModalVisible } = useTravelModal();
  const {
    setContentNumber,
    isDateChanged,
    isDurationChanged,
    isFoodChanged,
    isArtChanged,
  } = useModalContent();
  const goToDate = () => {
    setContentNumber(2);
    setIsModalVisible(true);
  };
  const goToDuration = () => {
    setContentNumber(3);
    setIsModalVisible(true);
  };
  const goToFood = () => {
    setContentNumber(4);
    setIsModalVisible(true);
  };
  const goToArt = () => {
    setContentNumber(5);
    setIsModalVisible(true);
  };
  return (
    <div className={iconHolder}>
      <IconItem
        icon={<ChooseDateIcon color={COLORS.PRIMARY} size={"45"} />}
        description={"Change date"}
        changed={isDateChanged}
        index={0}
        onClick={goToDate}
      />
      <IconItem
        icon={<ClockIcon color={COLORS.PRIMARY} size={"45"} />}
        description={"Change duration"}
        changed={isDurationChanged}
        index={1}
        onClick={goToDuration}
      />
      <IconItem
        icon={<MealIcon color={COLORS.PRIMARY} size={"45"} />}
        description={"Change food and restaurants choice"}
        changed={isFoodChanged}
        index={2}
        onClick={goToFood}
      />
      <IconItem
        icon={<HistoryIcon color={COLORS.PRIMARY} size={"45"} />}
        description={"Change History and Art choice"}
        changed={isArtChanged}
        index={3}
        onClick={goToArt}
      />
    </div>
  );
};
