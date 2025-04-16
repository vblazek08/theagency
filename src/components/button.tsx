import { ReactNode } from "react";

interface ButtonProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  href?: string;
}

const Button = ({
  size = "md",
  children,
  className = "",
  href = "#",
}: ButtonProps) => {
  const baseStyles =
    "text-green-600 border-2 border-green-600 text-center inline-block";

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base font-extrabold",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <a href={href} className={`${baseStyles} ${sizes[size]} ${className}`}>
      {children}
    </a>
  );
};

export default Button;
