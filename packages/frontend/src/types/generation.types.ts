import dayjs from "dayjs";

export interface IDependencies {
  0: [string, string, string];
  1: [dayjs.Dayjs];
  2: [number | null];
  3: [boolean | null];
  4: [boolean | null];
}

export interface IHandleClick {
  [key: number]: () => boolean;
}

export interface IVisibility {
  stateVisibility: boolean;
  setStateVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  cityVisibility: boolean;
  setCityVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}
