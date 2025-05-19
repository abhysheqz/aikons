import React from "react";
const Cards_02: React.FC<
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
        d="M16 7H3v15h13z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M11.557 12.207c-1.197-.595-2.057.282-2.057.282s-.86-.877-2.058-.282c-1.45.72-1.554 3.54 2.058 4.793 3.612-1.252 3.508-4.073 2.057-4.793Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.018 20 21 6.614 8.875 2 7 7.039"
      />
    </svg>
  );
};
export default Cards_02;
