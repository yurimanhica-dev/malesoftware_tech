import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Button = (
  props: {
    variant: "primary" | "secondary" | "text";
    iconAfter?: ReactNode;
  } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { className, children, variant, iconAfter } = props;
  return (
    <button
      className={twMerge(
        "h-auto px-10 py-2 border-2 border-primary/40 hover:bg-primary/10 bg-transparent rounded-full shadow-md flex justify-between items-center gap-2 group/button",
        variant === "primary" && "bg-terciar/80 hover:text-accent-foreground",
        variant === "secondary" &&
          "hover:bg-primary hover:text-accent-foreground ",
        variant === "text" && "h-auto px-0 border-transparent",
        className
      )}
    >
      <span>{children}</span>
      {iconAfter && <span>{iconAfter}</span>}
    </button>
  );
};

export default Button;
