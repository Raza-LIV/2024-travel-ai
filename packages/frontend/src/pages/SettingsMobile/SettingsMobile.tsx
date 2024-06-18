import {
  backIcon,
  contentContainer,
  settingsContainer,
  settingsLayout,
  removeButton,
  description,
} from "./SettingsMobile.styled";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/roures";
import { TEXT } from "../../constants/text";
import { useUser } from "../../hooks/user.hook";
import { ICON_SIZE } from "../../constants/iconSize";
import { COLORS } from "../../constants/colors";
import { IconBack } from "../../assets/icons/IconBack";

export const SettingsMobile = () => {
  const navigation = useNavigate();
  const { deleteUser } = useUser();
  return (
    <div className={settingsContainer}>
      <div className={backIcon} onClick={() => navigation(ROUTES.HOME)}>
        <IconBack color={COLORS.SECONDARY} size={ICON_SIZE[40]} />
      </div>
      <div className={settingsLayout}>{TEXT.SETTINGS}</div>
      <div className={contentContainer}>
        <div className={removeButton} onClick={deleteUser}>
          Remove user
        </div>
        <div className={description}>{TEXT.SETTINGS_DESCRIPTION}</div>
      </div>
    </div>
  );
};
