import { useGetWidth } from "../../hooks/get-width.hook";
import { SettingsDesktop } from "../SettingsDesktop/SettingsDesktop";
import { SettingsMobile } from "../SettingsMobile/SettingsMobile";

export const Settings = () => {
  const { windowSize } = useGetWidth();
  const chooseView = () => {
    if (windowSize <= 1190) return <SettingsMobile />;
    return <SettingsDesktop />;
  };
  return chooseView();
};
