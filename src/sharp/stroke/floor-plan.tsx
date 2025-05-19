import React from "react";
const FloorPlan: React.FC<
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
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.5 9.5h11m4 0h4m-12 12v-12m0-3v-4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M17.843 21.5H21.5v-19h-19v19H13c0-2.878 2-4.5 4-4.5"
      />
    </svg>
  );
};
export default FloorPlan;
