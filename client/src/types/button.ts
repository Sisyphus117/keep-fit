import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonType = "button" | "submit" | "reset";
type ButtonSize = "sm" | "md" | "lg";
type ButtonColor = "normal" | "confirm" | "danger";

// type ButtonClickHandler = {
//   (e: React.MouseEvent<HTMLButtonElement>): void | Promise<void>;
//   (): void | Promise<void>;
// };

// type AnchorClickHandler = {
//   (e: React.MouseEvent<HTMLAnchorElement>): void | Promise<void>;
//   (): void | Promise<void>;
// };

type BaseProps = {
  className?: string;
  children?: React.ReactNode;
  size?: ButtonSize;
  color?: ButtonColor;
  onClick: any;
};

export type ButtonProps =
  | (BaseProps &
      ({
        isLink?: false;
        //    onClick?: ButtonClickHandler;
        type?: ButtonType;
        disabled?: boolean;
      } & Omit<
        ButtonHTMLAttributes<HTMLButtonElement>,
        "onClick" | "type" | "disabled"
      >))
  | (BaseProps &
      ({
        isLink: true;
        to: string;
        //    onClick?: AnchorClickHandler;
      } & AnchorHTMLAttributes<HTMLAnchorElement>));
