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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 3v6M6 3v6m14.5-5v2m0 0v2m0-2H22M3.5 4v2m0 0v2m0-2H2m16 0H6M5 18h14l-2-4H7zM9 8v6m6-6v6M16 18v3m-8-3v3"
      />
    </svg>
  );
};
export default EquipmentGym_03;
