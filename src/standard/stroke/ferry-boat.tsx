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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 14.5h3m8 0h3M17.998 17l1.783-4.45a2 2 0 0 0-1.048-2.573l-6.331-2.798a1 1 0 0 0-.809 0L5.265 9.977a2 2 0 0 0-1.048 2.572L5.997 17"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m18 9.5-.335-3.681A2 2 0 0 0 15.674 4H8.326a2 2 0 0 0-1.991 1.819L6 9.5M12 4V2M2 21.193c.685 1.051 1.571 1.051 2.273 0 2.257-3.452 4.407 2.483 6 .04 2.43-3.664 4.178 2.689 6-.04 2.376-3.635 3.857 2.385 5.727.391"
      />
    </svg>
  );
};
export default FerryBoat;
