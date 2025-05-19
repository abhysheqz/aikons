import React from "react";
const ElectricTower_02: React.FC<
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
        d="M15 2H9v5h6zM19.5 22h-15L9 7h6zM2 22h20M3 7h18M3 7v2m0-2 6-5m12 5v2m0-2-6-5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15.5 9.5-8.5 5L18.5 20"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8.5 9.5 8.5 5L5.5 20"
      />
    </svg>
  );
};
export default ElectricTower_02;
