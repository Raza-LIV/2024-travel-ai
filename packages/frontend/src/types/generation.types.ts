export interface IDependencies {
  0: [string, string, string];
  1: [string];
  2: [number | undefined];
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

export interface IValues {
  country: string;
  state: string;
  city: string;
  date: string;
  duration: number | undefined;
  food: boolean | null;
  art: boolean | null;
}
