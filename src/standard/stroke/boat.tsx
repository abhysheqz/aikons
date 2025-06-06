import React from "react";
const Boat: React.FC<
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
        d="M2 21.193c.685 1.051 1.571 1.051 2.273 0 2.257-3.452 4.407 2.483 6 .04 2.43-3.664 4.178 2.689 6-.04 2.376-3.635 3.857 2.385 5.727.391M3.572 17 2 11h20s0 6-4.004 6M18 11l-3.606-4.007A3 3 0 0 0 12.164 6H7a1 1 0 0 0-1 1v4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 6V3a1 1 0 0 0-1-1H7"
      />
    </svg>
  );
};
export default Boat;
