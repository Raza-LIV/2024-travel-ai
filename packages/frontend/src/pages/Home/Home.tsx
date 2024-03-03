import { useGetWidth } from "../../hooks/get-width.hook";
import { HomeDesktop } from "./HomeDesktop/HomeDesktop";
import { HomeMobile } from "./HomeMobile/HomeMobile";

export const Home = () => {
  const { windowSize } = useGetWidth();
  const chooseView = () => {
    if (windowSize <= 1190) return <HomeMobile />;
    return <HomeDesktop />;
  };
  return chooseView();
};
