import React from "react";
const SwipeDown_03: React.FC<
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
        d="M18.5 8 16 5.5M18.5 8 21 5.5M18.5 8V2M5.871 12.671 8.005 14.5V4.75a1.75 1.75 0 1 1 3.5 0V11H16a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H9.07a2 2 0 0 1-1.664-.89L3.39 15.088a1.74 1.74 0 0 1 2.482-2.417"
      />
    </svg>
  );
};
export default SwipeDown_03;
