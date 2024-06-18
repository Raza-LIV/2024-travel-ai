export enum ENavbarOptions {
  EMPTY = "/",
  TEST_REG = "/test-reg",
  HOME = "/home",
  GENERATION = "/generation",
  SAVED = "/saved",
  FAVORITES = "/favorites",
  SETTINGS = "/settings",
  TRAVEL = "/travel",
}

export const ROUTES = {
  EMPTY: ENavbarOptions.EMPTY,
  TEST_REG: ENavbarOptions.TEST_REG,
  HOME: ENavbarOptions.HOME,
  GENERATION: ENavbarOptions.GENERATION,
  SAVED: ENavbarOptions.SAVED,
  FAVORITES: ENavbarOptions.FAVORITES,
  SETTINGS: ENavbarOptions.SETTINGS,
  // TRAVEL: ENavbarOptions.TRAVEL,
  TRAVEL: (id: string) => `${ENavbarOptions.TRAVEL}/${id}`,
};
