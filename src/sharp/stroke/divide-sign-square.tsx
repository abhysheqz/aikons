import React from "react";
const DivideSignSquare: React.FC<
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
        d="M7 12h10m-4-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 21h18V3H3z"
      />
    </svg>
  );
};
export default DivideSignSquare;
