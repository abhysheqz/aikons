import React from "react";
const FerryBoat: React.FC<
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
        d="m18.8 15.5 1.2-3.743L12 8l-8 3.757L5.2 15.5m13.6 0L18 18m.8-2.5H16m-10.8 0L6 18m-.8-2.5H8"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 11V5H6v6M12 5V2M2 21.193c.685 1.051 1.571 1.051 2.273 0 2.257-3.452 4.407 2.483 6 .04 2.43-3.664 4.178 2.689 6-.04 2.376-3.635 3.857 2.385 5.727.391"
      />
    </svg>
  );
};
export default FerryBoat;
