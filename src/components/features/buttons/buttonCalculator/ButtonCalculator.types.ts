import { PropsWithChildren } from "react";

export interface IButtonCalculator extends PropsWithChildren {
  variant?: "secondary" | "primary" | "ghost";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
