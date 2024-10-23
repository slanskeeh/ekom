export interface IButton {
  text: string;
  href?: string;
  handler?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;

  width?: "auto" | "medium";
  disabled?: boolean;
}
