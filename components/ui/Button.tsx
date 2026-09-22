import { ButtonHTMLAttributes, forwardRef } from "react";


// Inline CVA-like approach without external dep
type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[#0064e0] hover:bg-[#1a7fff] text-white shadow-[0_0_0_0_rgba(0,100,224,0)] hover:shadow-[0_0_24px_rgba(0,100,224,0.4)] active:scale-[0.98]",
  secondary:
    "bg-transparent border border-white/15 hover:border-white/40 hover:bg-white/5 text-white active:scale-[0.98]",
  ghost:
    "bg-transparent text-zinc-400 hover:text-white hover:bg-white/8 active:scale-[0.98]",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-5 py-2.5 text-sm rounded-xl",
  lg: "px-7 py-3.5 text-base rounded-xl",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={`
          inline-flex items-center justify-center gap-2.5
          font-semibold tracking-[-0.01em]
          transition-all duration-200
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0064e0]/50
          disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none
          ${variantClasses[variant]}
          ${sizeClasses[size]}
          ${className}
        `}
        {...props}
      >
        {isLoading ? (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          leftIcon
        )}
        {children}
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
