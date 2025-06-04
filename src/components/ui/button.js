
export const Button = ({ children, className, variant = "default", onClick }) => (
  <button className={`px-4 py-2 rounded-xl ${variant === "secondary" ? "bg-white text-black" : "bg-blue-600 text-white"} ${className}`} onClick={onClick}>
    {children}
  </button>
);
