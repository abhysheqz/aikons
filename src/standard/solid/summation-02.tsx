import React from "react";
const Summation_02: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h1.5a1 1 0 1 1 0 2H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h1.5a1 1 0 0 1 0 2zm13.5-1a1 1 0 0 1 1-1H20a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-1.5a1 1 0 1 1 0-2H20a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-1.5a1 1 0 0 1-1-1M8.09 7.587A1 1 0 0 1 9 7h6a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V9h-2.796l2.049 2.342a1 1 0 0 1 0 1.316L11.203 15H14v-.5a1 1 0 1 1 2 0V16a1 1 0 0 1-1 1H9a1 1 0 0 1-.753-1.658L11.171 12 8.247 8.659a1 1 0 0 1-.158-1.072"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Summation_02;
