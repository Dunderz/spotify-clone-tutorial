import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

/**
 * Props for the Button component.
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

/**
 * A customizable button component.
 * @param className - Additional CSS classes for the button.
 * @param children - The content of the button.
 * @param disabled - Whether the button is disabled.
 * @param type - The type of the button.
 * @param props - Additional props for the button.
 * @param ref - Reference to the button element.
 * @returns The rendered Button component.
 */

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        className={twMerge(
          `w-full rounded-full bg-green-500 border border-transparent px-3
          py-3 disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold hover:opacity-75 transition`,
          className
        )}
      >
        {children}
      </button>
    );
  }
);

// Set the display name for the Button component.
Button.displayName = "Button";

export default Button;
