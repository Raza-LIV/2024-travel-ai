import { ReactNode } from "react";

export interface ICurrentHomeItem {
  label: string;
  icon: ReactNode;
  description: string;
  isPrimary: boolean;
  nav: string;
}
