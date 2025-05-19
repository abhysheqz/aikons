import React from "react";
const ServingFood: React.FC<
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
        strokeWidth={1.5}
        d="M4 14h18M5 22l2-2 6.381-.399a4 4 0 0 0 2.71-1.301L20 14h-3.5l-1.914 1.914a2 2 0 0 1-1.414.586H13M2 19l3.828-3.828A4 4 0 0 1 8.657 14H11a2 2 0 0 1 2 2v.5m0 0H9.5M5 11.5a8 8 0 0 1 8-8m0 0a8 8 0 0 1 8 8m-8-8V2"
      />
    </svg>
  );
};
export default ServingFood;
