const Button = ({ size = "md", children }) => {
  const baseStyles = "text-green-600  border-2 border-green-600 text-center ";

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base font-extrabold",
    lg: "px-6 py-3 text-lg",
  };

  return <button className={`${baseStyles} ${sizes[size]}`}>{children}</button>;
};

export default Button;
