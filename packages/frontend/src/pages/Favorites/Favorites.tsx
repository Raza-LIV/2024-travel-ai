import { useGetWidth } from "../../hooks/get-width.hook";
import { FavoritesMobile } from "../FavoritesMobile/FavoritesMobile";
import { FavoritesDesktop } from "../FavoritesDesktop/FavoritesDesktop";

export const Favorites = () => {
  const { windowSize } = useGetWidth();
  const chooseView = () => {
    if (windowSize <= 1190) return <FavoritesMobile />;
    return <FavoritesDesktop />;
  };
  return chooseView();
};
