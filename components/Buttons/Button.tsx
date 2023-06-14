"use client";

type ButtonProps = {
  text: string;
  disabled?: boolean;
  onClick: () => void;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  className?: string;
};

export const Button = ({
  text,
  disabled,
  onClick,
  size = "medium",
  variant = "primary",
  type = "button",
  className,
}: ButtonProps) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
