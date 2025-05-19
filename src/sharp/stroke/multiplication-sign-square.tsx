import React from "react";
const MultiplicationSignSquare: React.FC<
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
        d="M3 21h18V3H3zM16 8l-4 4m0 0-4 4m4-4 4 4m-4-4L8 8"
      />
    </svg>
  );
};
export default MultiplicationSignSquare;
