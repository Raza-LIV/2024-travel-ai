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
