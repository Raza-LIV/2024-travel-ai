import React from "react";
import {
  centerBlock,
  container,
  content,
  greating,
  userName,
  menu,
  itemHolder,
} from "./HomeDesktop.styled";
import { css } from "@emotion/css";
import { useNavbarActive } from "../../../store/isNavbarOpen";
import { Navbar } from "../../../components/Navbar/Navbar";
import { TEXT } from "../../../constants/text";
import { MobileHomeItem } from "../../../components/MobileHomeItem/MobileHomeItem";
import { GenerationIcon } from "../../../assets/icons/GenerationIcon";
import { ICON_SIZE } from "../../../constants/iconSize";
import { ROUTES } from "../../../constants/roures";
import { SavedIcon } from "../../../assets/icons/SavedTravels";
import { FavoritesIcon } from "../../../assets/icons/FavoritesIcon";
import { SettingsIcon } from "../../../assets/icons/SettingsIcon";

export const HomeDesktop = () => {
  const { isNavbarOpen, setIsNavbarOpen } = useNavbarActive();
  return (
    <div className={container}>
      <Navbar />
      <div
        className={css(
          content,

          `padding-left: ${isNavbarOpen ? "290px" : "70px"}`
        )}
      >
        <div className={centerBlock}>
          <div className={greating}>
            <p>{TEXT.WELCOME}</p>
            <p className={userName}>{TEXT.USER}</p>
          </div>
          <div className={menu}>
            <div className={itemHolder}>
              <MobileHomeItem
                icon={
                  <GenerationIcon isPrimaryColor={false} size={ICON_SIZE[40]} />
                }
                description={TEXT.GENERATION_DESCRIPTION}
                label={TEXT.GENERATION}
                isPrimary={true}
                nav={ROUTES.GENERATION}
              />
            </div>
            <div className={itemHolder}>
              <MobileHomeItem
                icon={<SavedIcon isPrimaryColor={true} size={ICON_SIZE[40]} />}
                description={TEXT.SAVED_DESCRIPTION}
                label={TEXT.SAVED}
                isPrimary={false}
                nav={ROUTES.SAVED}
              />
            </div>
            <div className={itemHolder}>
              <MobileHomeItem
                icon={
                  <FavoritesIcon isPrimaryColor={true} size={ICON_SIZE[40]} />
                }
                description={TEXT.FAVORITES_DESCRIPTION}
                label={TEXT.FAVORITES}
                isPrimary={false}
                nav={ROUTES.TRAVEL}
              />
            </div>
            <div className={itemHolder}>
              <MobileHomeItem
                icon={
                  <SettingsIcon isPrimaryColor={true} size={ICON_SIZE[40]} />
                }
                description={TEXT.SETTINGS_DESCRIPTION}
                label={TEXT.SETTINGS}
                isPrimary={false}
                nav={ROUTES.SETTINGS}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
