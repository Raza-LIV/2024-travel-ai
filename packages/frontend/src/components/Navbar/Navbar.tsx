import React from "react";
import { useNavbarActive } from "../../store/isNavbarOpen";
import { css } from "@emotion/css";
import { NavItem } from "../NavbarItem/NavItem.1";
import { TEXT } from "../../constants/text";
import { navbarContainer } from "./Navbar.styled";
import { GenerationIcon } from "../../assets/icons/GenerationIcon";
import { ICON_SIZE } from "../../constants/iconSize";
import { SavedIcon } from "../../assets/icons/SavedTravels";
import { FavoritesIcon } from "../../assets/icons/FavoritesIcon";
import { SettingsIcon } from "../../assets/icons/SettingsIcon";

export const Navbar = () => {
  const { isNavbarOpen, setIsNavbarOpen, setIsNavbarClose } = useNavbarActive();
  return (
    <div
      onMouseOver={() => setIsNavbarOpen()}
      onMouseLeave={() => setIsNavbarClose()}
      className={css(
        navbarContainer,
        `width: ${isNavbarOpen ? "290px" : "70px"}`
      )}
    >
      <NavItem
        title={TEXT.GENERATION}
        text={TEXT.GENERATION_DESCRIPTION}
        icon={<GenerationIcon isPrimaryColor size={ICON_SIZE[50]} />}
      />
      <NavItem
        title={TEXT.SAVED}
        text={TEXT.SAVED_DESCRIPTION}
        icon={<SavedIcon isPrimaryColor size={ICON_SIZE[50]} />}
      />
      <NavItem
        title={TEXT.FAVORITES}
        text={TEXT.FAVORITES_DESCRIPTION}
        icon={<FavoritesIcon isPrimaryColor size={ICON_SIZE[50]} />}
      />
      <NavItem
        title={TEXT.SETTINGS}
        text={TEXT.SETTINGS_DESCRIPTION}
        icon={<SettingsIcon isPrimaryColor size={ICON_SIZE[50]} />}
      />
    </div>
  );
};
