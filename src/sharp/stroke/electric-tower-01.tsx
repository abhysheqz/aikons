import React from "react";
const ElectricTower_01: React.FC<
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
        d="m9 6 .4 2.214c.066.434.026.875-.119 1.296L5 22M15 6l-.4 2.214c-.066.434-.026.875.119 1.296L19 22"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m3 11 1-2 5-3h6l5 3 1 2M3 22h18M4 9h16"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m9.5 10 6.5 4.5L5 22"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 10 8 14.5 19 22"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m9 6 3-4 3 4" />
    </svg>
  );
};
export default ElectricTower_01;
