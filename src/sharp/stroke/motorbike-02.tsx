import React from "react";
const Motorbike_02: React.FC<
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
      <circle
        cx={19.5}
        cy={16.5}
        r={2.5}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={4.5}
        cy={16.5}
        r={2.5}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.235 7.87c1.282 1.559 1.727 3.042 1.765 3.826a5.3 5.3 0 0 0-2.218-.479C17.338 11.217 14.5 13 14.5 16h-5c0-2.5-2.5-4.5-5-4.5L2.001 10V8l8.004 1.666.97-.56c1.287-.88 3.33-1.713 5.364-.978l1.162.372zm0 0c-.803-.978-1.935-1.985-3.5-2.87"
      />
    </svg>
  );
};
export default Motorbike_02;
