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
  navOpenedContainer,
} from "./NavItem.styled";
import { useNavigate } from "react-router-dom";

interface IProps {
  title: string;
  text: string;
  icon: ReactNode;
  nav: string;
}

export const NavItem = ({ title, text, icon, nav }: IProps) => {
  const navigate = useNavigate();
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
        <div className={navOpenedContainer}>
          <div className={labelHolder}>
            <div className={label} onClick={() => navigate(nav)}>
              {title}
            </div>
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
