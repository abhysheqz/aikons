import React from "react";
const WeightScale_01: React.FC<
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
        d="M18 22a1 1 0 0 0 1-1v-6a7 7 0 1 0-14 0v6a1 1 0 0 0 1 1zM20 2H4l1.11 1.664A3 3 0 0 0 7.605 5h8.788a3 3 0 0 0 2.497-1.336z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 15a4 4 0 0 1 8 0m-4.5.5 1-1.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 8V5m-4 3V5"
      />
    </svg>
  );
};
export default WeightScale_01;
