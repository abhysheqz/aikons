import React from "react";
const Cards_01: React.FC<
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
        d="M15.999 7h-13v15h13z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.018 20 21 6.614 8.875 2 7 7.039"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m11.999 14.5-2.5-3-2.5 3 2.5 3z"
      />
    </svg>
  );
};
export default Cards_01;
