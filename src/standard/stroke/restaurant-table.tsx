import React from "react";
const RestaurantTable: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.5 17c-1.667 0-1.833-1-3.5-1l2-6.5h16l2 6.5c-1.667 0-1.667 1-3.333 1S17 16 15.333 16c-1.666 0-1.666 1-3.333 1s-1.667-1-3.333-1-1.5 1-3.167 1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M18 9.5a6 6 0 0 0-6-6m-6 6a6 6 0 0 1 6-6m0 0V2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 17v5m0 0h2m-2 0h-2"
      />
    </svg>
  );
};
export default RestaurantTable;
