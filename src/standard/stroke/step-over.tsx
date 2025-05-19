import React from "react";
const StepOver: React.FC<
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
        d="M7.5 20h6M20.5 15.27 17.911 18l-2.563-2.73M3.5 17.417V7a3 3 0 0 1 3-3h8.421a3 3 0 0 1 3 3.003l-.01 10.055"
      />
    </svg>
  );
};
export default StepOver;
