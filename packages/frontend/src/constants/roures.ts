export enum ENavbarOptions {
  GENERATION = "/generation",
  SAVED = "/saved",
  FAVORITES = "/favorites",
  SETTINGS = "/settings",
}

export const ROUTES = {
  EMPTY: "/",
  HOME: "/home",
  GENERATION: ENavbarOptions.GENERATION,
  SAVED: ENavbarOptions.SAVED,
  FAVORITES: ENavbarOptions.FAVORITES,
  SETTINGS: ENavbarOptions.SETTINGS,
};
