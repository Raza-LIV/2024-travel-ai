import React, { ReactNode, useEffect, useState } from "react";
import { InfoIcon } from "../../assets/icons/InfoIcon";
import { ICON_SIZE } from "../../constants/iconSize";
import { HideIcon } from "../../assets/icons/HideIcon";
import { useNavbarActive } from "../../store/isNavbarOpen";
import {
  description,
  iconContainer,
  iconWrapper,
  label,
  labelHolder,
} from "./NavItem.styled";

interface IProps {
  title: string;
  text: string;
  icon: ReactNode;
}

export const NavItem = ({ title, text, icon }: IProps) => {
  const { isNavbarOpen } = useNavbarActive();
  const [isActive, setIsActive] = useState<boolean>(false);
  const handleOpen = () => {
    setIsActive((prev) => !prev);
  };
  useEffect(() => {
    if (!isNavbarOpen) {
      setIsActive(false);
    }
  }, [isNavbarOpen]);
  return (
    <div>
      {isNavbarOpen ? (
        <div>
          <div className={labelHolder}>
            <div className={label}>{title}</div>
            <div onClick={handleOpen} className={iconWrapper}>
              {isActive ? (
                <HideIcon size={ICON_SIZE[30]} />
              ) : (
                <InfoIcon size={ICON_SIZE[30]} />
              )}
            </div>
          </div>
          {isActive && <div className={description}>{text}</div>}
        </div>
      ) : (
        <div className={iconContainer}>{icon}</div>
      )}
    </div>
  );
};
