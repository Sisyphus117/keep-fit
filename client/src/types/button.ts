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
  type?: ButtonType;
  onClick?: any;
  children?: React.ReactNode;
  isLink?: boolean;
  to?: string;
  disabled?: boolean;
  size?: ButtonSize;
  color?: ButtonColor;
};

export type ButtonProps = BaseProps &
  (
    | ({
        isLink?: false;
        //    onClick?: ButtonClickHandler;
        type?: ButtonType;
        disabled?: boolean;
      } & ButtonHTMLAttributes<HTMLButtonElement>)
    | ({
        isLink: true;
        to: string;
        //    onClick?: AnchorClickHandler;
      } & AnchorHTMLAttributes<HTMLAnchorElement>)
  );
