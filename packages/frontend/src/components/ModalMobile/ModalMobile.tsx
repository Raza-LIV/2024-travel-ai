import { useEffect, useRef, useState } from "react";
import { container, modalBlur } from "./ModalMobile.styled";
import { css } from "@emotion/css";
import { useTravelModal } from "../../store/travelModal";
import { useModalContent } from "../../store/modalContent";
import { ModalContent } from "../ModalContent/ModalContent";

interface IProps {
  requestIndex: number;
}

export const ModalMobile = ({ requestIndex }: IProps) => {
  const { contentNumber } = useModalContent();
  const { isModalVisible, setIsModalVisible } = useTravelModal();
  const refContainer = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);
  useEffect(() => {
    if (refContainer.current && isModalVisible) {
      setContentHeight(refContainer.current.offsetHeight);
    }
  }, [contentNumber, isModalVisible]);
  return (
    <div
      className={css(
        modalBlur,
        `opacity: ${isModalVisible ? 1 : 0};
        z-index: ${isModalVisible ? 100 : 0}` // higher z-index fixes unsmooth brightness issue
      )}
      onClick={() => setIsModalVisible(false)}
    >
      <div
        className={css(container, `height: ${contentHeight}px`)}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalContent refContainer={refContainer} requestIndex={requestIndex} />
      </div>
    </div>
  );
};
