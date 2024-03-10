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
import { useLocation, useNavigate } from "react-router-dom";
import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";
import { ENavbarOptions } from "../../constants/roures";

interface ICurrentItem {
  title: string;
  text: string;
  icon: ReactNode;
  nav: string;
  routeName: ENavbarOptions;
}

interface IProps {
  content: ICurrentItem;
}

export const NavItem = ({ content }: IProps) => {
  const navigate = useNavigate();
  const { isNavbarOpen } = useNavbarActive();
  const [isActive, setIsActive] = useState<boolean>(false);
  const handleOpen = () => {
    setIsActive((prev) => !prev);
  };

  const param = useLocation();
  useEffect(() => {
    if (!isNavbarOpen) {
      setIsActive(false);
    }
  }, [isNavbarOpen]);
  return (
    <div>
      {isNavbarOpen ? (
        <div
          className={css(
            navOpenedContainer,
            param.pathname === content.routeName &&
              `border-right: 3px solid ${COLORS.PRIMARY}`
          )}
        >
          <div className={labelHolder}>
            <div
              className={label}
              onClick={() => {
                navigate(content.nav);
              }}
            >
              {content.title}
            </div>
            <div onClick={handleOpen} className={iconWrapper}>
              {isActive ? (
                <HideIcon size={ICON_SIZE[30]} />
              ) : (
                <InfoIcon size={ICON_SIZE[30]} />
              )}
            </div>
          </div>
          {isActive && <div className={description}>{content.text}</div>}
        </div>
      ) : (
        <div
          className={css(
            iconContainer,
            param.pathname === content.routeName &&
              `border-right: 3px solid ${COLORS.PRIMARY}`
          )}
        >
          {content.icon}
        </div>
      )}
    </div>
  );
};
