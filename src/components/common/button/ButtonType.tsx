export type ButtonProps = {
  children: React.ReactNode;
  styles?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type: "submit" | "button" | "reset";
  tabIndex?: number;
};
