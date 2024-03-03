import React, { ReactNode } from "react";
import { openedItem } from "./NavItem.styled";
import { InfoIcon } from "../../assets/icons/InfoIcon";
import { ICON_SIZE } from "../../constants/iconSize";
import { HideIcon } from "../../assets/icons/HideIcon";
import { TEXT } from "../../constants/text";
import { useNavbarActive } from "../../store/isNavbarOpen";
import { css } from "@emotion/css";

interface IProps {
  title: string;
  text: string;
  isActive: boolean;
  icon: ReactNode;
  setIsActive: () => void;
}

export const NavItem = ({
  title,
  text,
  isActive,
  icon,
  setIsActive,
}: IProps) => {
  const { isNavbarOpen } = useNavbarActive();
  const handleOpen = () => {
    setIsActive();
  };
  return (
    <div>
      {isNavbarOpen ? (
        <div>
          <div>
            <div>{title}</div>
            <div onClick={handleOpen}>icon</div>
          </div>
          {isActive && <div>{text}</div>}
        </div>
      ) : (
        <div>{icon}</div>
      )}
    </div>
  );
};
