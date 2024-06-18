import { css } from "@emotion/css";
import { Navbar } from "../../components/Navbar/Navbar";
import {
  centerBlock,
  container,
  content,
  description,
  pageName,
  removeButton,
} from "./SettingsDesktop.styled";
import { useNavbarActive } from "../../store/isNavbarOpen";
import { TEXT } from "../../constants/text";
import { useUser } from "../../hooks/user.hook";

export const SettingsDesktop = () => {
  const { isNavbarOpen } = useNavbarActive();
  const { deleteUser } = useUser();
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
          <div className={pageName}>{TEXT.SETTINGS}</div>
          <div className={description}>{TEXT.SETTINGS_DESCRIPTION}</div>
          <div className={removeButton} onClick={deleteUser}>
            Remove user
          </div>
        </div>
      </div>
    </div>
  );
};
