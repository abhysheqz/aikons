import React from "react";
const LeftTriangle: React.FC<
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
        d="M20 15h-3a2 2 0 0 0-2 2v3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 10.995h-.993a1 1 0 0 0-1 1v7a1 1 0 0 1-1 1h-7.003a1 1 0 0 0-1 1V22M20 7.496l.004-3.079c.001-.891-1.077-1.338-1.707-.708L3.709 18.286c-.63.63-.184 1.708.707 1.708H7.5"
      />
    </svg>
  );
};
export default LeftTriangle;
