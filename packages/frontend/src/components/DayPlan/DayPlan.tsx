import {
  container,
  generatedText,
  topContainer,
  styledTitle,
  editTag,
  buttonsContainer,
  editTagLabel,
  regenerateButton,
} from "./DayPlan.styled";
import { GenerateButtonIcon } from "../../assets/icons/GenerateButtonIcon";
import { EditIcon } from "../../assets/icons/EditIcon";
import { COLORS } from "../../constants/colors";
import { css } from "@emotion/css";
import { useTravelModal } from "../../store/travelModal";
import { useModalContent } from "../../store/modalContent";
import { useMaximize } from "../../store/isMaximize";

interface IProps {
  dayNumber: string;
  description: string;
  changed: boolean;
  index: number;
  isMobile: boolean;
}

export const DayPlan = ({
  dayNumber,
  description,
  changed,
  index,
  isMobile,
}: IProps) => {
  const { isMaximize } = useMaximize();
  const { setIsModalVisible, setRequestIndex } = useTravelModal();
  const { setContentNumber } = useModalContent();
  const handleClick = () => {
    setContentNumber(0);
    setIsModalVisible(true);
    setRequestIndex(index);
  };
  const handleBorder = () => {
    if (isMobile && isMaximize && index === 0) return true;
    if (isMobile && !isMaximize && index === 0) return false;
    if (index === 0) return true;
  };
  const text = description.trim().split("\n");
  return (
    <div
      className={css(
        container,
        `border-radius: ${handleBorder() ? "30px 30px 10px 10px" : "10px"};`
      )}
    >
      <div className={topContainer}>
        <div className={styledTitle}>{dayNumber}</div>
        <div className={buttonsContainer}>
          <div className={css(editTag, `opacity: ${changed ? 1 : 0}`)}>
            <div className={editTagLabel}>Changed</div>
            <EditIcon color={COLORS.PRIMARY_OPAQUE[30]} size={"30"} />
          </div>
          <div className={regenerateButton} onClick={handleClick}>
            <GenerateButtonIcon color={COLORS.PRIMARY_OPAQUE[30]} size={"30"} />
          </div>
        </div>
      </div>
      {/* <div className={generatedText}>{description}</div> */}
      <div className={generatedText}>
        {text.map((line, index) => (
          <p key={index}>{line.trim()}</p>
        ))}
      </div>
    </div>
  );
};
