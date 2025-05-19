import React from "react";
const EquipmentGym_03: React.FC<
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
        d="M18 3.5v5m-12-5v5m14.5-4V6m0 0v1.5m0-1.5h1m-18-1.5V6m0 0v1.5m0-1.5h-1M18 6H6"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 18h14l-2-4H7z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 8.5V14m6-5.5V14M16 18v2.5M8 18v2.5"
      />
    </svg>
  );
};
export default EquipmentGym_03;
