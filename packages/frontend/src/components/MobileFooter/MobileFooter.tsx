import { useState } from "react";
import {
  container,
  editButtonLabel,
  editButton,
  generateButtonLabel,
  generateButton,
  iconContainer,
} from "./MobileFooter.styled";
import { ShareIcon } from "../../assets/icons/ShareIcon";
import { COLORS } from "../../constants/colors";
import { Maximize } from "../../assets/icons/Maximize";
import { DownloadIcon } from "../../assets/icons/DownloadIcon";
import { EditIcon } from "../../assets/icons/EditIcon";
import { GenerateButtonIcon } from "../../assets/icons/GenerateButtonIcon";
import { useTravelModal } from "../../store/travelModal";
import { useModalContent } from "../../store/modalContent";
import { css } from "@emotion/css";

interface IProps {
  isMaximizeActive: boolean;
  setIsMaximizeActive: (flag: boolean) => void;
}

export const MobileFooter = ({
  isMaximizeActive,
  setIsMaximizeActive,
}: IProps) => {
  const { isModalVisible, setIsModalVisible } = useTravelModal();
  const { setContentNumber } = useModalContent();
  const cickToOpenModal = () => {
    setContentNumber(1);
    setIsModalVisible(true);
  };
  const [isShareActive, setIsShareActive] = useState<boolean>(false);
  const [isDownloadedActive, setIsDownloadedActive] = useState<boolean>(false);
  return (
    <div className={container}>
      <div
        className={iconContainer}
        onClick={() => setIsShareActive((prev) => !prev)}
      >
        <ShareIcon
          color={`${
            isShareActive ? COLORS.PRIMARY : COLORS.PRIMARY_OPAQUE[60]
          }`}
          size={"50"}
        />
      </div>
      <div
        className={iconContainer}
        onClick={() => setIsDownloadedActive((prev) => !prev)}
      >
        <DownloadIcon
          color={`${
            isDownloadedActive ? COLORS.PRIMARY : COLORS.PRIMARY_OPAQUE[60]
          }`}
          size={"50"}
        />
      </div>
      <div
        className={iconContainer}
        onClick={() => setIsMaximizeActive(!isMaximizeActive)}
      >
        <Maximize
          color={`${
            isMaximizeActive ? COLORS.PRIMARY : COLORS.PRIMARY_OPAQUE[60]
          }`}
          size={"50"}
        />
      </div>
      <div
        className={css(
          editButton,
          `border: solid 1px ${
            isModalVisible ? COLORS.PRIMARY : COLORS.PRIMARY_OPAQUE[60]
          }`
        )}
        onClick={cickToOpenModal}
      >
        <div className={editButtonLabel}>Edit</div>
        <EditIcon color={COLORS.PRIMARY} size={"30"} />
      </div>
      <div className={generateButton}>
        <div className={generateButtonLabel}>Generate</div>
        <GenerateButtonIcon color={COLORS.SECONDARY} size={"30"} />
      </div>
    </div>
  );
};
