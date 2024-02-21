// import React from "react";
// import { useGetWidth } from "../../hooks/get-width.hook";
import { FavoritesIcon } from "../../assets/icons/FavoritesIcon";
import { GenerationIcon } from "../../assets/icons/GenerationIcon";
import { SettingsIcon } from "../../assets/icons/SettingsIcon";
import { SavedIcon } from "../../assets/icons/SavedTravels";
import { TEXT } from "../../assets/text/text";
import { MobileHomeItem } from "../../components/MobileHomeItem/MobileHomeItem";
import {
  homeContainer,
  navigationMenu,
  dashboard,
  userName,
  itemsHolder,
} from "./Home.styled";

export const Home = () => {
  // const { windowSize } = useGetWidth();
  // {windowSize}
  return (
    <div className={homeContainer}>
      <div className={dashboard}>Dashboard page</div>
      <div className={navigationMenu}>
        <div className={userName}>
          <p>Welcome</p>, Andrew Willians
        </div>
        <div className={itemsHolder}>
          <MobileHomeItem
            icon={<GenerationIcon isPrimaryColor={false} />}
            description={TEXT.GENERATION_DESCRIPTION}
            label={TEXT.GENERATION}
            isPrimary={true}
          />
          <MobileHomeItem
            icon={<SavedIcon isPrimaryColor={true} />}
            description={TEXT.SAVED_DESCRIPTION}
            label={TEXT.SAVED}
            isPrimary={false}
          />
          <MobileHomeItem
            icon={<FavoritesIcon isPrimaryColor={true} />}
            description={TEXT.FAVORITES_DESCRIPTION}
            label={TEXT.FAVORITES}
            isPrimary={false}
          />
          <MobileHomeItem
            icon={<SettingsIcon isPrimaryColor={true} />}
            description={TEXT.SETTINGS_DESCRIPTION}
            label={TEXT.SETTINGS}
            isPrimary={false}
          />
        </div>
      </div>
    </div>
  );
};
