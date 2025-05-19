import React from "react";
const Stairs_02: React.FC<
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
        d="M10 15H3.5c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541C2 15.801 2 16.034 2 16.5s0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077H10zM13 12H7c-.943 0-1.414 0-1.707.293S5 13.057 5 14v1h8z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 18h8c1.886 0 2.828 0 3.414-.586S22 15.886 22 14V8c0-.943 0-1.414-.293-1.707S20.943 6 20 6h-1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 9h-6c-.943 0-1.414 0-1.707.293S8 10.057 8 11v1h8zM19 6h-6c-.943 0-1.414 0-1.707.293S11 7.057 11 8v1h8z"
      />
    </svg>
  );
};
export default Stairs_02;
