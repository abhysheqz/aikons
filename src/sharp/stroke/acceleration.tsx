import React from "react";
const Acceleration: React.FC<
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
        d="M2.5 21V9l18 12zM8.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m15.012 9.99 5.434 3.186m-.452-3.186 1.01 3.513-3.482 1.004"
      />
    </svg>
  );
};
export default Acceleration;
