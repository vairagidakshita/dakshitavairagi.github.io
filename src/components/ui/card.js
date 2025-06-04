
export const Card = ({ children, className }) => (
  <div className={`rounded-2xl shadow-md bg-gray-800 p-6 ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);
