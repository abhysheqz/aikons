import React from "react";
const ChefHat: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 14a4 4 0 1 0-2.225-7.325M6 14a4 4 0 1 1 2.225-7.325m7.55 0a4.002 4.002 0 0 0-7.55 0m7.55 0A4 4 0 0 1 15.874 9m-6.41-1a4 4 0 0 0-1.24-1.325M18 16H6M21 20H3M18 11.5V20M6 11.5V20"
      />
    </svg>
  );
};
export default ChefHat;
