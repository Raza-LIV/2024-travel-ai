import React from "react";
import { useNavbarActive } from "../../store/isNavbarOpen";
import { css } from "@emotion/css";
import { NavItem } from "../NavbarItem/NavItem";
import { TEXT } from "../../constants/text";
import { componentContainer, navbarContainer } from "./Navbar.styled";
import { GenerationIcon } from "../../assets/icons/GenerationIcon";
import { ICON_SIZE } from "../../constants/iconSize";
import { SavedIcon } from "../../assets/icons/SavedTravels";
import { FavoritesIcon } from "../../assets/icons/FavoritesIcon";
import { SettingsIcon } from "../../assets/icons/SettingsIcon";
import { COLORS } from "../../constants/colors";
import { ENavbarOptions, ROUTES } from "../../constants/roures";

export const Navbar = () => {
  const { isNavbarOpen, setIsNavbarOpen, setIsNavbarClose } = useNavbarActive();

  return (
    <div
      className={css(
        componentContainer,
        `background-color: ${isNavbarOpen && COLORS.BLACK_OPAQUE[50]}`
      )}
    >
      <div
        onMouseOver={() => setIsNavbarOpen()}
        onMouseLeave={() => setIsNavbarClose()}
        className={css(navbarContainer, `width: ${isNavbarOpen ? 290 : 70}px`)}
      >
        <NavItem
          content={{
            title: TEXT.GENERATION,
            text: TEXT.GENERATION_DESCRIPTION,
            icon: <GenerationIcon isPrimaryColor size={ICON_SIZE[50]} />,
            nav: ROUTES.GENERATION,
            routeName: ENavbarOptions.GENERATION,
          }}
        />
        <NavItem
          content={{
            title: TEXT.SAVED,
            text: TEXT.SAVED_DESCRIPTION,
            icon: <SavedIcon isPrimaryColor size={ICON_SIZE[50]} />,
            nav: ROUTES.SAVED,
            routeName: ENavbarOptions.SAVED,
          }}
        />
        <NavItem
          content={{
            title: TEXT.FAVORITES,
            text: TEXT.FAVORITES_DESCRIPTION,
            icon: <FavoritesIcon isPrimaryColor size={ICON_SIZE[50]} />,
            nav: ROUTES.FAVORITES,
            routeName: ENavbarOptions.FAVORITES,
          }}
        />
        <NavItem
          content={{
            title: TEXT.SETTINGS,
            text: TEXT.SETTINGS_DESCRIPTION,
            icon: <SettingsIcon isPrimaryColor size={ICON_SIZE[50]} />,
            nav: ROUTES.SETTINGS,
            routeName: ENavbarOptions.SETTINGS,
          }}
        />
      </div>
    </div>
  );
};
