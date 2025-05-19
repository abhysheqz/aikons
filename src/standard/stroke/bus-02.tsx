import React from "react";
const Bus_02: React.FC<
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
        d="M4.5 16H6m12 0h1.5M10 16h4M17.5 19v3m-11-3v3M20 16V5a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 12c2.413.655 5 1 7.5 1s6.068-.42 8.5-1M22 10l-1.046.654a2 2 0 0 0-.797.953L20 12M2 10l1.046.654a2 2 0 0 1 .797.953L4 12"
      />
    </svg>
  );
};
export default Bus_02;
