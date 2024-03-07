import { FavoritesIcon } from "../../assets/icons/FavoritesIcon";
import { GenerationIcon } from "../../assets/icons/GenerationIcon";
import { SettingsIcon } from "../../assets/icons/SettingsIcon";
import { SavedIcon } from "../../assets/icons/SavedTravels";
import { TEXT } from "../../constants/text";
import { MobileHomeItem } from "../../components/MobileHomeItem/MobileHomeItem";
import {
  homeContainer,
  navigationMenu,
  dashboard,
  userName,
  itemsHolder,
} from "./HomeMobile.styled";
import { ROUTES } from "../../constants/roures";
import { ICON_SIZE } from "../../constants/iconSize";

export const HomeMobile = () => {
  return (
    <div className={homeContainer}>
      <div className={dashboard}>Dashboard page</div>
      <div className={navigationMenu}>
        <div className={userName}>
          <p>Welcome</p>, Andrew Willians
        </div>
        <div className={itemsHolder}>
          <MobileHomeItem
            icon={
              <GenerationIcon isPrimaryColor={false} size={ICON_SIZE[40]} />
            }
            description={TEXT.GENERATION_DESCRIPTION}
            label={TEXT.GENERATION}
            isPrimary={true}
            nav={ROUTES.GENERATION}
          />
          <MobileHomeItem
            icon={<SavedIcon isPrimaryColor={true} size={ICON_SIZE[40]} />}
            description={TEXT.SAVED_DESCRIPTION}
            label={TEXT.SAVED}
            isPrimary={false}
            nav={ROUTES.SAVED}
          />
          <MobileHomeItem
            icon={<FavoritesIcon isPrimaryColor={true} size={ICON_SIZE[40]} />}
            description={TEXT.FAVORITES_DESCRIPTION}
            label={TEXT.FAVORITES}
            isPrimary={false}
            nav={ROUTES.FAVORITES}
          />
          <MobileHomeItem
            icon={<SettingsIcon isPrimaryColor={true} size={ICON_SIZE[40]} />}
            description={TEXT.SETTINGS_DESCRIPTION}
            label={TEXT.SETTINGS}
            isPrimary={false}
            nav={ROUTES.SETTINGS}
          />
        </div>
      </div>
    </div>
  );
};
